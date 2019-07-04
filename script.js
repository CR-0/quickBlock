console.log("Enabled Quick Block :)");

document.addEventListener("DOMNodeInserted",function(i){
	var elem = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
	if (elem.length > 0){		
		elem[0].click();
		console.log("Block !!!")
	}	
});