// Soal No 2 a

// versi if-else
function hariEsok(hariIni) {
    if (hariIni == "Senin") {
        console.log("Selasa");
    } else if (hariIni == "Selasa") {
        console.log("Rabu");
    } else if (hariIni == "Rabu") {
        console.log("Kamis");
    } else if (hariIni == "Kamis") {
        console.log("Jumat");
    } else if (hariIni == "Jumat") {
        console.log("Sabtu");
    } else if (hariIni == "Sabtu") {
        console.log ("Minggu");
    } else if (hariIni == "Minggu") {
        console.log("Senin");
    } else {
        console.log("Silahkan koreksi input, gunakan huruf kapital di awal kata")
    };
}

let tesHariBesok = hariEsok("Kamis")

// versi switch case

function nextDay(today) {
    switch (today) {
        case "Monday":
            console.log("Tuesday");
            break;
        case "Tuesday":
            console.log("Wednesday");
            break;
        case "Wednesday":
            console.log("Thursday");
            break;
        case "Thursday":
            console.log("Friday");
            break;
        case "Friday":
            console.log("Saturday");
            break;
        case "Saturday":
            console.log("Sunday");
            break;
        case "Sunday":
            console.log("Monday");
            break;
            default:
                console.log("please check your input")
    }
}

let nextDayTest = nextDay("Saturday")

// Soal No 2 b

function deretGenap(batas) {
    for (let i = 0; i <= batas; i = i+2) {
        console.log(i)
    }
}

let tesDeretGenap = deretGenap(15)

// Soal No 2 c

function deretGanjil(angkaBatas) {
    for (let x = 1; x <= angkaBatas; x = x+2) {
        console.log(x)
    }
}

let tesDeretGanjil = deretGanjil(12)

// Soal 2 d

function cekPrima(n) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

function deretPrima(range) {
    for( var n = 2;  n <= range;  n++ ) {
        if( cekPrima(n) ) {
        console.log(n);
        }
    }
}

let tesDeretPrima = deretPrima(18)


