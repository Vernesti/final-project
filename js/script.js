

$('.submit').click(function () {
 	var arrayInp = $("input:radio:checked").serializeArray();
 	var arrayTextarea = $("textarea").serializeArray();
		console.log(arrayInp);
		console.log(arrayTextarea);
		
	var jsonSend = $.post("../json/test.json",arrayInp)
		.success(function() { alert("Успешное выполнение"); })
		.error(function() { alert("Ошибка выполнения"); })
		.complete(function() { alert("Завершение выполнения"); });
})

