function FirstReverse(str) { 
    let reversed = ""
for(let i = str.length-1;i>-1;i--){
reversed += str[i]

}
return reversed
// code goes here  

}
 
// keep this function call here 
console.log(FirstReverse(readline()));
