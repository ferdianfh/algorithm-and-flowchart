// * WEEK #6 ASSIGNMENT

// * TASK 1
/* 
* Inputkan sebuah String, kemudian urutkan terbalik String tersebut. Outputkan hasilnya!
* Contoh:
* Input: JavaScript
* Output: tpircSavaJ
*/

function reverseString (taka) {
    let newTaka = "";

    for (let i = taka.length - 1; i >= 0; i--) {
        newTaka += taka[i];
    }

    return newTaka;
}

console.log(reverseString("Javascript"));


// * TASK 2
/* 
* Deteksi Palindrom
* Diberikan sebuah teks, periksa apakah kata tersebut palidrom atau tidak. 
* Misalnya teks "Malam", output = Palindrom.
*/
function palindromeDetector (palindrome) {
    let newPal = "";

    for (let i = palindrome.length - 1; i >= 0; i--) {
        newPal += palindrome[i];
    }

    if (newPal === palindrome) {
        return console.log("Palindrome")
    } else {
        return console.log("It's Not Palindrome")
    }
}

palindromeDetector("radar");



// * TASK 3
/* 
* Reverse Words
* Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik.
* Misalnya kalimat "Saya belajar Javascript", output = "Javascript belajar Saya"
*/
// * cara 1
// function reverseWordPosition (phrase) {
//     return phrase.split(" ").reverse().join(" ");
// }

// console.log(reverseWordPosition("Saya Belajar Javascript"));

// * cara 2
function reverseWords (phrase) {
    let phraseToArr = phrase.split(" ");
    let reversePhrase = [];

    for (let i = (phraseToArr.length) - 1; i >= 0; i--) {
        reversePhrase.push(phraseToArr[i]);
    }

    return reversePhrase.join(" ");
}

console.log(reverseWords("Saya Belajar Javascript"));

// * TASK 4
/* 
* Diberikan sebuah kata Surabaya, ubah huruf "a" pada kata tersebut menjadi huruf "o".
* Sehingga output-nya menjadi Suroboyo.
*/

function changeLetter (char) {
    return char.replace(/a/g, "o");
}

console.log(changeLetter("Surabaya"));
