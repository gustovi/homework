// Să se scrie cu cifre arabe un număr cu cifre romane
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


function romanToArabic(romanNumeral) {
   const romanValues = {
     I: 1,
     V: 5,
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000
   };

   let result = 0;
   for (let i = 0; i < romanNumeral.length; i++) {
     const currentVal = romanValues[romanNumeral[i]];
     const nextVal = romanValues[romanNumeral[i + 1]];
 
     if (nextVal && nextVal > currentVal) {
       result -= currentVal;
     } else {
       result += currentVal;
     }
   }
   return result;
 }
 console.log(romanToArabic("MCMXCIV")); 



//  //**************
//  function romanToArabic(romanNumeral) {
//    // definim o obiect numit `romanValues` care mapează fiecare simbol roman la valoarea sa
//    const romanValues = {
//      I: 1,
//      V: 5,
//      X: 10,
//      L: 50,
//      C: 100,
//      D: 500,
//      M: 1000
//    };
 
//    // inițializăm o variabilă `result` cu valoarea 0
//    let result = 0;
 
//    // parcurgem fiecare simbol din numărul roman
//    for (let i = 0; i < romanNumeral.length; i++) {
//      // extragem valoarea simbolului curent din obiectul `romanValues`
//      const currentVal = romanValues[romanNumeral[i]];
 
//      // extragem valoarea simbolului următor, dacă există
//      const nextVal = romanValues[romanNumeral[i + 1]];
 
//      // verificăm dacă simbolul următor are o valoare mai mare decât simbolul curent
//      if (nextVal && nextVal > currentVal) {
//        // dacă da, înseamnă că avem de-a face cu o valoare scrisă sub formă de scădere
//        // deci scădem valoarea simbolului curent din rezultat
//        result -= currentVal;
//      } else {
//        // altfel, adăugăm valoarea simbolului curent la rezultat
//        result += currentVal;
//      }
//    }
 
//    // returnăm rezultatul final
//    return result;
//  }
