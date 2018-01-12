		
// $('.submit').click(function () {
// 		$("input:radio:checked").each(function () {
//  		console.log($(this).attr('name') + ' ' + $(this).val());
// 		})
//  		if ($("textarea").val().length > 0) {
// 	 			$("textarea").each(function () {
// 		 		console.log($(this).attr('name') + ' ' + $(this).val());
// 	 		})
// 			}
		
// 	})



$('.submit').click(function () {
 	var arrayInp = $("input:radio:checked").serializeArray();
 	var arrayTextarea = $("textarea").serializeArray();
		console.log(arrayInp);
		console.log(arrayTextarea);
		
	var jsonSend = $.post("../json/test.json",arrayInp,)
		.success(function() { alert("Успешное выполнение"); })
		.error(function() { alert("Ошибка выполнения"); })
		.complete(function() { alert("Завершение выполнения"); });
})

