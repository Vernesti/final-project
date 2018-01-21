$('.submit').click(function () {
	var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
	var serialTextarea = JSON.stringify($("textarea").serializeArray());
		localStorage.setItem("layout-inputs",serialInp);
		localStorage.setItem("layout-textarea",serialTextarea);
			
});