function detectWord(str) {
	let text = ""
	let word = ""
for(text of str){
	if(text == text.toLowerCase()){
		word += text
	}
}
	return word
}