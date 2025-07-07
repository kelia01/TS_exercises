function explode(s: string) {
  let result: string[] = [];
  for(let char of s){
    let count = Number(char);
    result.push(char.repeat(count));
  }
  return result.join('');
}