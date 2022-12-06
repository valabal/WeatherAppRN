export function logJSONObject(item: Object) {
  let str = JSON.stringify(item);
  str = JSON.stringify(item, null, 4); // (Optional) beautiful indented output.
  console.log('OBJECT :' + str);
}
