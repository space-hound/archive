const LottoScrapper = (() => {

    const STATE = {
        years: [],
        months: [],
        numbers: {},
        count: 0,
    };

    // -------------------------------------------------------------------------------- //

    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time * 1000);
        });
    }

    // -------------------------------------------------------------------------------- //

    const getIframe = () => {
        return document.querySelector('iframe').contentWindow.document;
    };

    // -------------------------------------------------------------------------------- //

    const getSelectYear = () => {
        return getIframe().querySelector('select[name="select-year"]');
    };

    const getSelectYearOptions = () => {
        return [
            ...getSelectYear().options
        ].map((option) => {
            return option.value;
        }).filter((value) => {
            return value !== '0';
        }).filter((value) => {
            return value !== '2023';
        });
    };

    const selectYear = (year) => {
        getSelectYear().value = year;
    };

    // -------------------------------------------------------------------------------- //

    const getSelectMonth = () => {
        return getIframe().querySelector('select[name="select-month"]');
    };

    const getSelectMonthOptions = () => {
        return [
            ...getSelectMonth().options
        ].map((option) => {
            return option.value;
        }).filter((value) => {
            return value !== '0';
        });
    };

    const selectMonth = (month) => {
        getSelectMonth().value = month;
    };

    // -------------------------------------------------------------------------------- //

    const pressSearch = () => {
        getIframe().querySelector('#submitButton').click();
    };

    // -------------------------------------------------------------------------------- //

    const getNumbersContainers = () => {
        return [
            ...getIframe().querySelectorAll(
                '.rezultate-extrageri-content.resultDiv:not(.floatright) .info-rezultat  .numere-extrase'
            )
        ];
    };

    const getNumberContainerImages = (numberContainer) => {
        return [...numberContainer.querySelectorAll('img')]
    }

    const getNumberFromImage = (img) => {
        return img.src.split('bile/').pop().split('.png').shift();
    };

    // -------------------------------------------------------------------------------- //

    const main = async () => {
        STATE.years = getSelectYearOptions();
        STATE.months = getSelectMonthOptions();

        for (const year of STATE.years) {
            for (const month of STATE.months) {
                console.log(`Loading ${month} / ${year}.`);

                selectYear(year);
                selectMonth(month);
                pressSearch();

                await wait(3);

                console.log(`Loaded ${month} / ${year}.`);

                getNumbersContainers().forEach((numberContainer) => {
                    STATE.count++;

                    getNumberContainerImages(numberContainer).forEach((numberImage) => {
                        const number = getNumberFromImage(numberImage);

                        if(STATE.numbers[number]) {
                            STATE.numbers[number]++;
                        } else {
                            STATE.numbers[number] = 1;
                        }
                    });
                });
            }

            console.log(`For year ${year}, those numbers where loaded: `);
            console.log(STATE.numbers);
        }

        console.log('Done...');
    }


    main.state = STATE;

    return main;

})();

LottoScrapper();