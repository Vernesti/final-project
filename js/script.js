		
		$('.submit').click(function () {
	 		$("input:radio:checked").each(function () {
		 		console.log($(this).attr('name') + ' ' + $(this).val());
	 		})
		 		if ($("textarea").val().length > 0) {
			 			$("textarea").each(function () {
				 		console.log($(this).attr('name') + ' ' + $(this).val());
			 		})
	 			}
	 		
	 	})



