/*export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}*/


export function healthSort(params) {
  let hp = params.sort(
    function(a, b) {return b.health - a.health}
  );
  return hp
}