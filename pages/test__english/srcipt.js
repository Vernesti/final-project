$('.submit').click(function () {
	var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
	var serialTextarea = JSON.stringify($("textarea").serializeArray());
		localStorage.setItem("english-inputs",serialInp);
		localStorage.setItem("english-textarea",serialTextarea);
			
});