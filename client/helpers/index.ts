// export function debounce(time: number) {
//   return (target: any, key: string, descriptor: any): any => {
//     debugger
//     let timeoutMark: number;
//     const originalDescriptor = descriptor.value;
//     return {
//       ...descriptor,
//       value: (...arg: any[]) => {
//         clearTimeout(timeoutMark);
//         timeoutMark = window.setTimeout(() => {
//           return originalDescriptor.apply(target, arg);
//         }, time);
//       },
//     };
//   };
// }

export function debounce(ms: number) {
  return (target: any, propertyKey: string, descriptor: any) => {
    let timeoutId: number;
    const originalDescValue = descriptor.value;
    return {
      ...descriptor,
      value: function (...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          originalDescValue.apply(this, args);
        }, ms);
      },
    };
  };
}
