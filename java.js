// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);) (task 1)

//let birthday = new Date("07-04-2003");

//setInterval(() => {
//let now = new Date();
//let between = now - birthday;
//let il = Math.trunc(between / (1000 * 60 * 60 * 24 *30*12));
//let ay = Math.trunc(between / (1000 * 60 * 60 * 24 *30)%12);
// let gun = Math.trunc(between / (1000 * 60 * 60 * 24)%30);
//let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//let saniye = Math.trunc((between / 1000) % 60);

//let r=Math.trunc(Math.random()*256);
//let g=Math.trunc(Math.random()*256);
//let b=Math.trunc(Math.random()*256);

//console.clear();
//console.log(`%c ${il} il ${ay} ay ${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye `,`color:rgb(${r},${g},${b}); font-size: 15px;`);
// }, 1000);





///2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir. (task2)

//let students = [
// {
//  Ad: "Sumra",
//   Soyad: "Mammadov",
//   Yas: 18,
//  telebeler_id: 1,
//  Hobbileri: "Arasdirma etmek",
//Xususiyyetleri: "Interaqtiv",
// Qiymət: 91
//},
//{
//   Ad: "Eli",
// Soyad: "Suleymanli",
// Yas: 19,
// telebeler_id: 2,
// Hobbileri: "Futbol",
// Xususiyyetleri: "Yaradici",
// Qiymət: 78
//},
//{
// Ad: "Veli",
// Soyad: "Dadasov",
//Yas: 20,
//telebeler_id: 3,
// Xususiyyetleri: "Creativ",
// Qiymət: 75
//},
// {
// Ad: "Ehmed",
//Soyad: "Ehmedli",
// Yas: 21,
// telebeler_id: 4,
//  Hobbileri: "Basketbal",
//  Xususiyyetleri: "Volcu",
//  Qiymət: 45
//},
//];
//let searced = prompt("Bir ad girin");
//console.log(searced);
//let student=students.find(a=>a.Ad.toUpperCase()=== searced.toLocaleUpperCase() )
//if (student) {
// alert(` Tapildi :${student.Ad}`)

//}
//else {
//alert("Tapilmadi");
//}


// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:(Task 3)
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

//let ad = prompt("ad daxil edin")
//let array = []
//let a = 1;
//const newname = setInterval(() => {
    //for (let i = 0; i < a; i++) {
        //array.push(ad[i]);
   // }
    //let newname = array.join("");
    //console.log(newname);
    //array = [];
   // if (a === ad.length) {
        //clearInterval(newname);
       // azalt();
    //}
   // a++;
//}, 1000);

//function azalt() {
    //let b = ad.length;
    //const newname2 = setInterval(() => {
        //if (b === 2) {
          //  clearInterval(newname2);
      //  }
      //  for (let i = 0; i < b - 1; i++) {
      //      array.push(ad[i]);
       // }
       // let newname = array.join(""); console.log(newname);
       // array = [];
        //b--;
   // },// 1000);
//}

//const d = new Date();
//let text = d.toLocaleDateString();
//console.log(typeof text)