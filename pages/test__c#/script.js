$('.submit').click(function () {
	var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
	var serialTextarea = JSON.stringify($("textarea").serializeArray());
		localStorage.setItem("cSharp-inputs",serialInp);
		localStorage.setItem("cSharp-textarea",serialTextarea);
			
});