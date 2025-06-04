function capitalize(s: string | String[],arr: number[]): string{
    if(typeof s === 'string') 
    s = s.split('');
    for(let i = 0; i < arr.length; i++){
      if(s[arr[i]]) s[arr[i]] = s[arr[i]].toUpperCase();
    }
    return s.join('');
  };
  