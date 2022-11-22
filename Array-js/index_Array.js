const siswa = [];
siswa[0] = {
    nama    : "Monica",
    gender  : "Female",
    age     : 17,
    email   :"monica@dingdong.com",
    favoriteColor :["Yellow","Pink" ,"White","Purple"],
    isHavePet :"Yes",
    education : {
        nama : "SD-01",
        city :"jakarta",
        Graduate :2016
    },
    
    favoriteRestauran :["Bento" ,"Sushi" , "Pancake" , "Eggy" ,"Tempura" ,"Padang"]

};
siswa[1]= {
    nama    : "Wendy",
    gender  : "Male",
    age     : 23,
    email   :"wendy@dingdong",
    favoriteColor :["Blue","Black" ,"grey"],
    isHavePet :"Yes",
    education : [
        {
        nama : "SD 02",
        city :"jakarta",
        Graduate :2010
        },
        {
            nama : "SMA 01",
            city :"Surabaya",
            Graduate :2016
        },
    ],
    
    
    favoriteRestauran :["Katsu", "Bento" ,"Sushi" , "Pancake" , "Eggy" ,"Tempura" ,"Padang"]
}


console.log("Nama :" + " "+siswa[1].nama);
console.log("Age :" + " "+siswa[1].age);
console.log("Education :" + " "+siswa[1].education[1].city)
console.log("Makanan favorite:" + " "+siswa[1].favoriteRestauran[0])
