$('.submit').click(function () {
	var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
	var serialTextarea = JSON.stringify($("textarea").serializeArray());
		localStorage.setItem("ss-inputs",serialInp);
		localStorage.setItem("ss-textarea",serialTextarea);
			
});