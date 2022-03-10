///////
// 1 //
///////
function changeWord(selectedText, changedText, text){
    /*
    parameter pertama = teks yang ada di dalam kalimat
    parameter kedua = new text yang ingin mengganti teks yang ada di argumen pertama
    parameter ketiga = kalimat yang terdapat teks di argumen pertama
    return result = parameter_ketiga.replace(parameter_pertama, parameter_kedua)
    */
    if (typeof text === "string"){
        return result = text.replace(selectedText, changedText);
    }
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log (changeWord('mencintai', 'membenci',kalimat1));
console.log (changeWord('Bromo','Semeru',kalimat2));



///////
// 2 //
///////
checkTypeNumber = (givenNumber) => {
    /*
    if (givenNumber)

    */
    if (givenNumber % 2 === 0 && typeof givenNumber !== "string" && typeof givenNumber === "number") {
        return "GENAP";
    } else if (typeof givenNumber !== "string" && typeof givenNumber === "number") {
        return "GANJIL";
    } else if (givenNumber === undefined) {
        return "Error: Bro where is the parameter?";
    } else {
        return "Error: Invalid data type";
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());



///////
// 3 //
///////
// function checkEmail(email ){
//     /*

//     */
// }

// console.log(checkEmail('apranata@binar.co.id'));
// console.log(checkEmail('apranata@binar.com'));
// console.log(checkEmail('apranata@binar'));
// console.log(checkEmail('apranata'));
// console.log(checkTypeNumber(checkEmail(3322)));
// console.log(checkEmail());



///////
// 4 //
///////
function isValidPassword (email) {

}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());


///////
// 5 //
///////
function getSplitName(personName) {
    /*

    */
    if (typeof personName === "string") {
        const newName = personName.split(' ');
        if (newName.length === 1){
            const name1 = {
                firstName : newName[0],
                middleName : null,
                lastName : null,
            };
            return typeof name1 == "object";
        } else if (newName.length === 2){
            const name2 = {
                firstName : newName[0],
                middleName : null,
                lastName : newName[1],
            };
            return name2;
        } else if (newName.length === 3){
            const name3 = {
                firstName : newName[0],
                middleName : newName[1],
                lastName : newName[2],
            };
            return name3;
        } else {
            return "Error: This function is only for 3 characters name";
        }
    }  else {
        return "ERROR: Tipe data bukan string";
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));



///////
// 6 //
///////
function getAngkaTerbesarKedua(dataAngka) {
    /*
    firstBiggest = arr data angka index 0
    secondBiggest = 0


    looping

    }
    */
    var firstBiggest = dataAngka[0];
    var secondBiggest = 0;
    
    if (typeof dataAngka === "object") {
        for(var a=0; a < dataAngka.length; a++){
            if(dataAngka[a] > firstBiggest) {
                secondBiggest = firstBiggest;
                firstBiggest = dataAngka[a];
            }
            else if(dataAngka[a] > secondBiggest && dataAngka[a] !== firstBiggest) {
                secondBiggest = dataAngka[a];
            }
        }
        return secondBiggest;
    } else {
        return "ERROR: Tipe data bukan array!";
    }

    
}

const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());



///////
// 7 //
///////
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

function getTotalPenjualan(dataPenjualan){
    /*

    */
   dataPenjualan === "number";

}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));



///////
// 8 //
///////
const dataPenjualanNovel = [
    {
      idProduct: "BOOK002421",
      namaProduk: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: "BOOK002351",
      namaProduk: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualan){
    /*

    */



    dataPenjualan === "object"
}

console.log(getInfoPenjualan(dataPenjualanNovel));




