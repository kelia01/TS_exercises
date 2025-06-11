function pigIt(str: string): string{
  return str
    .split(' ')
    .map((x) => {
      if((!(/\W/).test(x))){
        x = x.slice(1)+x[0]+'ay';
        return x;
      }
      return x;
    }).join(' ');
}
