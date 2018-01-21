$('.submit').click(function () {
	
	var nubmerOfCheckedQuestions = 0;
	if ( Array.prototype.filter.call(document.getElementsByName('js-q1'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('.test-choose').offset().top }, 800);
			$('#hint-test-1').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-1').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q2'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q1-a5').offset().top }, 800);
			$('#hint-test-2').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-2').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q3'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q2-a5').offset().top }, 800);
			$('#hint-test-3').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-3').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q4'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q3-a5').offset().top }, 800);
			$('#hint-test-4').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-4').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q5'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q4-a5').offset().top }, 800);
			$('#hint-test-5').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-5').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q6'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q5-a5').offset().top }, 800);
			$('#hint-test-6').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-6').fadeOut();
			}, 10000);
		}
	
	if ( Array.prototype.filter.call(document.getElementsByName('js-q7'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q6-a5').offset().top }, 800);
			$('#hint-test-7').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-7').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q8'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q7-a5').offset().top }, 800);
			$('#hint-test-8').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-8').fadeOut();
			}, 10000);
		}	

	if ( Array.prototype.filter.call(document.getElementsByName('js-q9'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q8-a5').offset().top }, 800);
			$('#hint-test-9').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-9').fadeOut();
			}, 10000);
		}

	if ( Array.prototype.filter.call(document.getElementsByName('js-q10'), 
			function( firstTestElements ) { return firstTestElements.checked;}).length ) { 
			nubmerOfCheckedQuestions += 1}
		else {
			$('html').animate({scrollTop: $('#js-q9-a5').offset().top }, 800);
			$('#hint-test-10').fadeIn();
			setTimeout(function hideHint() {
				$('#hint-test-10').fadeOut();
			}, 10000);
		}		

	if (nubmerOfCheckedQuestions == 10) {
			(function addJSArrayToStorage() {
				var serialInp = JSON.stringify($("input:radio:checked").serializeArray());	
				var serialTextarea = JSON.stringify($("textarea").serializeArray());
					localStorage.setItem("js-inputs",serialInp);
					localStorage.setItem("js-textarea",serialTextarea);
				}()
			);
		
	}
})