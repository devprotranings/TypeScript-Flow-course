// Object.defineProperty(
//   window,
//   'MySweetApp',
//   {
//     value: 'v1.0.0',
//     writable: true
//   }
// );
//
// function deliveryMethod() {
//   // TODO
//   return 'overnight';
// }
//
// function shipWeight() {
//   const el = document.getElementById('weight');
//   const count = el === null ? '0' : el.innerHTML;
//   return parseInt(count);
// }
//
// /**
//  * @param {(string | string[])} emailAddr - An email address of array of email addresses
//  */
// function sendUpdates(emailAddr: string | string []) {
//   function sendEmail(addr: string) {
//     // Default to standard delivery if empty
//     console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);
//
//     if (shipWeight() > 100) {
//       console.log('WARNING: Oversize package');
//     }
//   }
//
//   // If it's an array, loop over it
//   if (Array.isArray(emailAddr)) {
//     emailAddr.forEach((val: string, idx: number) => {
//       sendEmail(val.trim());
//     });
//   } else {
//     sendEmail(emailAddr.trim());
//   }
// }
//
// function numberOfOccurrences(str: string): string {
//   let count: number = 1;
//   return Array.prototype.reduce
//     .call(str, (result: string, currentChar: string, index: number, fullString: string) => {
//       if (currentChar === fullString.charAt(index + 1)) {
//         count++;
//         return result;
//       }
//       result = `${result}${count}${currentChar}`;
//       count = 1;
//       return result;
//     }, '');
// }
//
// console.log(numberOfOccurrences('aaaabbcbaa'))