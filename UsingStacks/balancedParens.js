function balancedParens(str) {
  const stack = [];
  for(let i = 0; i<str.length; i++) {
    let char = str[i];
    if(char === '('){
      stack.push('(');
    } else if(char=== ')') {
      const top = stack.pop();
      if(top !== '('){
        return false;
      }
    }
    return stack.length === 0;
  }

}