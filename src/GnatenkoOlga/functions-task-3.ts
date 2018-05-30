type Argument = string | number | boolean;
type Arguments = Array<Argument>;

function getUnique(...args: Arguments): Set<Argument> {
  let uniques = new Set<Argument>();
  args.forEach((item: Argument) => uniques.add(item));
  return uniques;
}

console.log(getUnique(1, 3, 2, 1));
console.log(getUnique(1, 3, true, true, '1'));
console.log(getUnique('1', 3, true, false, '1'));


