function charCount(myChar, str) {
	let amount =0;
	for(let i = 0; i <= str.length; i++ ){
		if(str[i] == myChar){
			amount += 1;
		}
	}
	return amount;
}