// TASK B 
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.



function countDigits(string) {
    const num_digit = string.split("");
   
    let count = 0;
    num_digit.map((num) => {
      tempNum = Number(num);

      if(!isNaN(tempNum)){
        count++;      
      }
    });
return count;
}

const result = countDigits("ad2a54y79wet0sfgb9")
console.log("result:", result);

// console.log("Jeck Ma maslahatlari");

// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'gri mentor tanlang va ko'proq hato qiling", // 20-30
//     "o'zinggizga ishlashni boshlang", // 30-40
//     "siz kukchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investment qiling", // 50-60
//     "endi dam oling, hayotdan rohatlaning", // 60...
// ];
//  //********* "CALLBACK" function
// function maslahatBering(a , callback) {
//     if(typeof a !== 'number') callback("please insert number", null)
//         else if(a <= 20) callback(null, list[0]);
//         else if(a > 20 && a <= 30) callback(null, list[1]);
//         else if(a > 30 && a <= 40) callback(null, list[2]);
//         else if(a > 40 && a <= 50) callback(null, list[3]);
//         else if(a > 50 && a <= 60) callback(null, list[4]);
//         else {
//             setInterval(() => { 
//                 callback(null, list[5]);
//             }, 2000);
//         }
// }

// console.log("Passed here 0")

// maslahatBering(77, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else { 
//         console.log("Javob:", data);
//     }
// });

// console.log("Passed here 1");

//********* "ASYNC" function without callback
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("please insert number")
//         else if(a <= 20) return list[0];
//         else if(a > 20 && a <= 30) return list[1];
//         else if(a > 30 && a <= 40) return list[2];
//         else if(a > 40 && a <= 50) return list[3];
//         else if(a > 50 && a <= 60) return list[4];
//         else { 
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(list[5]);
//                 }, 5000);
//             }); 

//             // setTimeout(function) () { // async function ichids setTimeout va setInterval core function larni ishlata olmaymiz.
//             //     return list[5];
//             // }, 5000);
//           }
// }

//******** CALL SECTION with "then" va "catch" bilan

// console.log("Passed here 0"); // Bu call usulini bir vaqning o'zida bir nechta marta call qilmoqchi bolsak code murakkablashib ketadi

// maslahatBering(65)
// .then((data) => {
//     console.log(`Javob:`, data)
// }) 
// .catch((err) => {
//     console.log("ERROR:", err)
// });

// console.log("Passed here 1");



//****  CALL SECTION with "async function" bilan ===> saync/await <===
// async function run() {  // bir vaqting o'zida bir nechta narsa soroqmoqchi bo'lsam shu manabu usul BEST!
//     let javob = await maslahatBering(20); //1 CALL
//     console.log(javob);
//     javob = await maslahatBering(31); //2 CALL
//     console.log(javob);
//     javob = await maslahatBering(81); //3 CALL
//     console.log(javob);
//     javob = await maslahatBering(51); //4 CALL
//     console.log(javob);
// }
//     run();



//TASK A
/* Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi*/

// function countLetter(charrcater, word) {
//     const toLowerCase = word.toLowerCase()
//     const myWord = toLowerCase.split("");

//     let count = 0
//     myWord.map((ele) => {
//         if(ele === charrcater) {
//             count ++;
//         }
//     })
//     return count;
// }

// const result = countLetter("e", "Engineer")
// console.log("result:", result)