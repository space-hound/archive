export default ( images ) => {
    return `
    <div id="castle-editor" class="d-none">
        <div class="castle-editor-tabs">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a data-to="castle-editor__general" class="nav-link active">General</a>
                </li>
                <li class="nav-item">
                    <a data-to="castle-editor__weapons" class="nav-link">Weapons</a>
                </li>
            </ul>

            <div class="castle-editor-close">
                <i class="fas fa-times"></i>
            </div>
        </div>

        <div id="castle-editor__general">
            <form class="form">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2">
                            <div id="castle-img">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="col-10 form-inline">
                            <div class="input-group mb-3 mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">ID</span>
                                </div>
                                <input type="text" class="form-control" readonly placeholder="ID" id="castle-editor-id">
                            </div>
                            
                            <div class="input-group mb-3 mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">X</span>
                                </div>
                                <input type="text" class="form-control" placeholder="X" id="castle-editor-x">
                            </div>
        
                            <div class="input-group mb-3 mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Y</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Y" id="castle-editor-y">
                            </div>
                            
                            <div class="input-group mb-3 mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Size</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Size" id="castle-editor-size">
                            </div>

                            <div class="input-group mb-3 mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Score</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Score" id="castle-editor-score">
                            </div>

                            <div class="input-group mb-3 mr-2 ml-5">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="castle-editor-isConquest">
                                    <label class="custom-control-label" for="castle-editor-isConquest">By Conquest</label>
                                </div>
                            </div>

                            <button class="btn btn-danger ml-auto" id="castle-editor-delete">Delete Castle</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div id="castle-editor__weapons" class="d-none">
            <form class="form">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            ${ Object.keys(images).map( key => {
                                return `
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <img src="${images[key]}" style="width: 32px; height: 32px;">
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="castle-editor-weapon-${key}">
                                </div>
                                `;
                            }).join("")}

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text stupid-fix">
                                        <img style="width: 32px; height: 32px;" class="stupid-fix">
                                        <div class="stupid-fix">Others</div>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="castle-editor-others">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
}