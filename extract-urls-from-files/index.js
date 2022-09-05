const FS = require('fs');
const PATH = require('path');
const getUrls = require('get-urls');

const OPTIONS = {
    target: "./result/result.txt",
    path: "./../repositories/web-vanillaquery/src/",
    types: [".js", ".html", ".txt"],
}

const URL_SEEKER = {

    openFile( target ) {

        function getCommandLine() {
            switch (process.platform) {
                case 'darwin':
                    return 'open';
                default:
                    return 'xdg-open';
            }
        }

        function openFileWithDefaultApp(file) {
            /^win/.test(process.platform) ?
                require("child_process").exec('start "" "' + file + '"') :
                require("child_process").spawn(getCommandLine(), [file],
                    { detached: true, stdio: 'ignore' }).unref();
        }

        openFileWithDefaultApp(PATH.join(__dirname, target));
    },

    async listDirContentRaw( path ) {
        return new Promise((resolve, reject) => {

            FS.readdir(path, (error, items) => {

                if (error) {
                    return reject(error);
                }

                const slag = {
                    path,
                    items
                }

                return resolve(slag);

            });
        });
    },

    async getFileStats( path, name ) {
        return new Promise((resolve, reject) => {

            const fullPath = PATH.join(path, name);

            FS.lstat(fullPath, (error, stats) => {

                if (error) {
                    return reject(error);
                }

                const slag = {
                    name,
                    path,
                    fullPath,
                    extension: PATH.extname(fullPath),
                    isDirectory: stats.isDirectory()
                }

                return resolve(slag);

            })
        })

    },

    async listDirectoryContent( source ) {

        const { path, items } = await this.listDirContentRaw(source);

        const fileStats = async item => {
            return await this.getFileStats(path, item);
        }

        return await Promise.all(
            items.map(item => fileStats(item))
        );

    },

    async getSubFolders( source ) {

        const allFiles = await this.listDirectoryContent(source);

        const subFolders = allFiles.filter(file => {
            return file.isDirectory;
        });

        return subFolders;
    },

    async filterFiles( source, types ) {

        const allFiles = await this.listDirectoryContent(source);

        return allFiles.filter(file => {
            return !file.isDirectory && types.includes(file.extension);
        });
    },

    async extractAllFilesRecurs( files, source, types ) {

        const allFiles = await this.filterFiles(source, types);

        files.push(...allFiles);

        const subFolders = await this.getSubFolders(source);

        if (subFolders.length > 0) {

            const subFoldersPaths = subFolders.map(subFolder => subFolder.fullPath);

            while (subFoldersPaths.length > 0) {

                const subFiles = await this.extractAllFilesRecurs(files, subFoldersPaths.shift(), types);

                files.push(...allFiles);
            }
        }

        return files;
    },

    async extractAllFiles( source, types ) {

        source = PATH.join(__dirname, source);

        const allFiles = await this.extractAllFilesRecurs([], source, types);

        return allFiles;
    },

    async readFile( file ) {
        return new Promise((resolve, reject) => {

            FS.readFile(file, 'utf8', (error, content) => {

                if (error) {
                    return reject(error);
                }

                return resolve(content);

            });

        });
    },

    async extractUrlsFromFile( file ) {

        const content = await this.readFile(file);

        return [...getUrls(content)];
    },

    async extractUrls( source, types ) {

        const allFiles = (await this.extractAllFiles(source, types)).map(file => file.fullPath);

        const urls = [];

        for (let i = 0; i < allFiles.length; i++) {

            const file = allFiles[i];

            const localUrls = await this.extractUrlsFromFile(file);

            urls.push(...localUrls);
        }

        return urls;
    },

    async writeUrlsToFile( source, types, target ) {

        let content = await this.extractUrls(source, types);

        console.log(content);

        return new Promise((resolve, reject) => {

            content = content.join("\r\n");

            FS.writeFile(target, content, (error) => {

                if (error) {
                    return reject(error);
                }

                console.log("DONE!");

                this.openFile(target);
                
            });
        })
    }
}

URL_SEEKER.writeUrlsToFile(OPTIONS.path, OPTIONS.types, OPTIONS.target);