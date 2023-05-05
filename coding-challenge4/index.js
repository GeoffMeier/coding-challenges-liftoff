function LongestWord(sen) { 
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let rawString = sen;
  
  let rawLetters = rawString.split('');
  let cleanLetters = rawLetters.filter(function(letter) {
    return punctuation.indexOf(letter) === -1;
  });
  
  let cleanString = cleanLetters.join('');
  
      // code goes here  
      let senSplit = cleanString.split(' ');
      
  let longestWord ;
  let lgth = 0;
  for(let i = 0; i< senSplit.length;i++){
  
     
    
    if(senSplit.length[i] >= lgth)
    lgth = senSplit[i].length;
    longestWord = senSplit[i]
  }
  return longestWord;
    // for(let i = 0; i < senSplit.length; i++){
    //   if(senSplit[i].length > longestWord){
      // longestWord = senSplit[i];
    //    }
    // }
    
  }
  
  
  
      // for(let i = 0;i<= arr.length;i++){
      //     if(arr)
      // }
     
  // keep this function call here 
  console.log(LongestWord(readline()));




  

     
  // keep this function call here 
  console.log(LongestWord(readline()));