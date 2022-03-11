///////
// 1 //
///////
console.log("Number 1.");
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
console.log("Number 2.");
checkTypeNumber = (givenNumber) => {
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
console.log("Number 3.");
function checkEmail(email){
    let regex = /^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9.-]+[.]+[a-z]+$/;
    if (typeof email === "string") {
        if (email.match(regex)) {
            return "VALID";
        } else if (email.match(/^[a-zA-Z0-9+_.-]+@+[a-zA-Z0-9.-]+$/)){
            return "INVALID";
        } 
    } 
    return "ERROR: TIDAK ADA DOMAIN";
}

console.log(checkEmail('apranata@binar.co.id')); //valid
console.log(checkEmail('apranata@binar.com')); //valid
console.log(checkEmail('apranata@binar')); //invalid
console.log(checkEmail('apranata')); //error
console.log(checkEmail(3322)); //error
console.log(checkEmail()); //error



///////
// 4 //
///////
console.log("Number 4.");
function isValidPassword (password) {
    let regex = /^[\s\Sa-zA-Z0-9]{8,}$/;
    if (typeof password === "string") {
        if (regex.test(password)) {
            return true;
        } else {
            return false;
        }
    }
    return "ERROR: WRONG DATA TYPE";
}

console.log(isValidPassword('Meong2021')); //true
console.log(isValidPassword('meong2021')); //false
console.log(isValidPassword('@eong')); //false
console.log(isValidPassword('Meong2')); //false
console.log(isValidPassword(0)); //error
console.log(isValidPassword()); //error


///////
// 5 //
///////
console.log("Number 5.");
function getSplitName(personName) {
    if (typeof personName === "string") {
        const newName = personName.split(' ');
        if (newName.length === 1){
            const name1 = {
                firstName : newName[0],
                middleName : null,
                lastName : null,
            };
            return name1;
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
            return "ERROR: This function is only for 3 characters name";
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
console.log("Number 6.");
function getAngkaTerbesarKedua(dataAngka) {
    if (dataAngka !== 0 && !dataAngka) {
        return "ERROR: Tidak Ada Data Dalam Array";
    } else if (dataAngka === 0){
        return "ERROR: Data Nol";
    }

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
    }
    return "ERROR: Tipe data bukan array!";
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
    const result = dataPenjualan.reduce((newData, item) =>
        newData + item.totalTerjual, 0);
    return result;
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));



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
    dataPenjualan === "object";
}

console.log(getInfoPenjualan(dataPenjualanNovel));




