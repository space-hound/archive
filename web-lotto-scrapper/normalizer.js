const normalizeData = ({years, month, numbers, count}) => {
    const normalizedNumbers = {};

    Object.entries(numbers).forEach(([key, value]) => {
        let finalKey = key;

        if(finalKey.includes('%')) {
            finalKey = finalKey.split('%20').shift();
        }

        if(normalizedNumbers[finalKey]) {
            normalizedNumbers[finalKey] = normalizedNumbers[finalKey] + value;
        } else {
            normalizedNumbers[finalKey] = value;
        }

    });

    console.log('normalizedNumbers', normalizedNumbers)

    const sortedNumbers = Object.entries(normalizedNumbers);

    sortedNumbers.sort((a, b) => {
        return b[1] - a[1];
    });

    console.log('sortedNumbers', sortedNumbers)

    console.log(`Din ${years[0]} pana in ${years[years.length - 1]} au fost ${count} extrageri.`);
    console.log('--------------------------------------------------------------------');
    sortedNumbers.forEach(([key, value]) => {
        console.log(`Numarul ${key} a iesit de ${value} ori.`);
    });
}

normalizeData({
    "years": [
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998"
    ],
    "months": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ],
    "numbers": {
        "1": 239,
        "2": 257,
        "3": 246,
        "4": 267,
        "5": 282,
        "6": 266,
        "7": 242,
        "8": 242,
        "9": 257,
        "10": 253,
        "11": 240,
        "12": 261,
        "13": 261,
        "14": 225,
        "15": 235,
        "16": 239,
        "17": 251,
        "18": 236,
        "19": 225,
        "20": 230,
        "21": 232,
        "22": 228,
        "23": 257,
        "24": 244,
        "25": 262,
        "26": 241,
        "27": 269,
        "28": 241,
        "29": 232,
        "30": 249,
        "31": 207,
        "32": 240,
        "33": 255,
        "34": 240,
        "35": 215,
        "36": 267,
        "37": 233,
        "38": 240,
        "39": 236,
        "40": 220,
        "41": 239,
        "42": 215,
        "43": 241,
        "44": 241,
        "45": 241,
        "46": 229,
        "47": 224,
        "48": 250,
        "49": 214,
        "39%20": 1,
        "5%20": 1,
        "46%20": 2,
        "18%20": 1,
        "32%20": 2,
        "37%20": 1,
        "6%20": 1,
        "36%20": 1,
        "8%20": 1,
        "48%20": 1
    },
    "count": 1978
});