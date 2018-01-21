$('.submit').click(function () {
	var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
	var serialTextarea = JSON.stringify($("textarea").serializeArray());
		localStorage.setItem("cPlus-inputs",serialInp);
		localStorage.setItem("cPlus-textarea",serialTextarea);
			
});