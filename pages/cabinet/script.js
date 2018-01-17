$(document).ready(function () {
	var returnJSInput = JSON.parse(localStorage.getItem("js-inputs"));
	var returnJSTextarea = JSON.parse(localStorage.getItem("js-textarea"));
	var resultJS = 0;
	var nameOfParticipant = 'Petro';


	if (returnJSInput != 0) {
		function countJSResult() {
			if (returnJSInput[0].value == '1-1') {
				resultJS += 10;
			}
			if (returnJSInput[1].value == '2-2') {
				resultJS += 10;
			}
			if (returnJSInput[2].value == '3-3') {
				resultJS += 10;
			}
			if (returnJSInput[3].value == '4-4') {
				resultJS += 10;
			}
			if (returnJSInput[4].value == '5-5') {
				resultJS += 10;
			}
			if (returnJSInput[5].value == '6-1') {
				resultJS += 10;
			}
			if (returnJSInput[6].value == '7-2') {
				resultJS += 10;
			}
			if (returnJSInput[7].value == '8-3') {
				resultJS += 10;
			}
			if (returnJSInput[8].value == '9-4') {
				resultJS += 10;
			}
			if (returnJSInput[9].value == '10-5') {
				resultJS += 10;
			}
			console.log(resultJS)
		}
		
		function addJSTableRow() {
			$('table').append( '<tr class="main-line">'+
								'<td class="td-username">'+
									'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
								'</td>'+
								'<td class="td-test-name">'+
									'<p class="nameOfTest">JavaScript</p>'+
								'</td>'+
								'<td class="td-test-persents">'+
									'<p><span class="persents">' + resultJS + '</span>% правильных ответов</p>'+
								'</td>'+
								'<td class="td-test-write">'+
									'<div class="td-test-write__first">'+
										'<span class="question-1">Первый вопрос: Душа моя озарена неземной радостью, как эти чудесные весенние утра?</span>'+
										'<p class="answer-1">' + returnJSTextarea[0].value + '</p>'+
									'</div>'+
									'<div class="td-test-write__second">'+
										'<span class="question-2">Второй вопрос: Я совсем один и блаженствую в здешнем краю?</span>'+
										'<p class="answer-2">' + returnJSTextarea[1].value +'</p>'+
									'</div>'+
									'<div class="td-test-write__third">'+
										'<span class="question-3">Третий вопрос: Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого?</span>'+
										'<p class="answer-3">' + returnJSTextarea[2].value +'</p>' +
									'</div>' +
								'</td>'+
							'</tr>')
		}
		countJSResult();
		addJSTableRow();

	}


})
	
// console.log(returnJSInput[1].value);