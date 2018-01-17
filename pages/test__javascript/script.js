$('.submit').click(function () {
 	var arrayInp = $("input:radio:checked").serializeArray();
 	var arrayTextarea = $("textarea").serializeArray();
	var serialInp = JSON.stringify(arrayInp);	
	var serialTextarea = JSON.stringify(arrayTextarea);
		localStorage.setItem("js-inputs",serialInp);
		localStorage.setItem("js-textarea",serialTextarea);
})


		// var returnInp = localStorage.getItem("js-inputs");
		// console.log(returnInp);
		// var returnTextarea = localStorage.getItem("js-textarea");
		// console.log(returnTextarea);