$(document).ready(function () {
	

	try {
		var returnJSInput = JSON.parse(localStorage.getItem("js-inputs"));
		var returnJSTextarea = JSON.parse(localStorage.getItem("js-textarea"));

		var returnCPlusInput = JSON.parse(localStorage.getItem("cPlus-inputs"));
		var returnCPlusTextarea = JSON.parse(localStorage.getItem("cPlus-textarea"));

		var returnCSharpInput = JSON.parse(localStorage.getItem("cSharp-inputs"));
		var returnCSharpTextarea = JSON.parse(localStorage.getItem("cSharp-textarea"));

		var returnLayoutInput = JSON.parse(localStorage.getItem("layout-inputs"));
		var returnLayoutTextarea = JSON.parse(localStorage.getItem("layout-textarea"));

		var returnEnglishInput = JSON.parse(localStorage.getItem("english-inputs"));
		var returnEnglishTextarea = JSON.parse(localStorage.getItem("english-textarea"));

		var returnSSInput = JSON.parse(localStorage.getItem("ss-inputs"));
		var returnSSTextarea = JSON.parse(localStorage.getItem("ss-textarea"));
	}
	catch (e) {
		console.log('invalid JSON' + e.name)
	}

	var resultJS = 0;
	var resultCPlus = 0;
	var resultCSharp = 0;
	var resultLayout = 0;
	var resultEnglish = 0;
	var resultSS = 0;
	var nameOfParticipant = 'Petro';

	// JavaScript

	if (returnJSInput != 0) {
		(function countJSResult() {
			if (returnJSInput[0].value == '1-1') {resultJS += 10;}
			if (returnJSInput[1].value == '2-2') {resultJS += 10;}
			if (returnJSInput[2].value == '3-3') {resultJS += 10;}
			if (returnJSInput[3].value == '4-4') {resultJS += 10;}
			if (returnJSInput[4].value == '5-5') {resultJS += 10;}
			if (returnJSInput[5].value == '6-1') {resultJS += 10;}
			if (returnJSInput[6].value == '7-2') {resultJS += 10;}
			if (returnJSInput[7].value == '8-3') {resultJS += 10;}
			if (returnJSInput[8].value == '9-4') {resultJS += 10;}
			if (returnJSInput[9].value == '10-5') {resultJS += 10;}
		}());
		(function addJSTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
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
					'<span class="question-1">Первый вопрос: Душа моя озарена неземной радостью, как эти чудесные весенние утра?</span>'+
					'<p class="answer-1">' + returnJSTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: Я совсем один и блаженствую в здешнем краю?</span>'+
					'<p class="answer-2">' + returnJSTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого?</span>'+
					'<p class="answer-3">' + returnJSTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

	// C++

	if (returnCPlusInput != 0) {
		(function countCPlusResult() {
			if (returnCPlusInput[0].value == '1-1') {resultCPlus += 10;}
			if (returnCPlusInput[1].value == '2-2') {resultCPlus += 10;}
			if (returnCPlusInput[2].value == '3-3') {resultCPlus += 10;}
			if (returnCPlusInput[3].value == '4-4') {resultCPlus += 10;}
			if (returnCPlusInput[4].value == '5-5') {resultCPlus += 10;}
			if (returnCPlusInput[5].value == '6-1') {resultCPlus += 10;}
			if (returnCPlusInput[6].value == '7-2') {resultCPlus += 10;}
			if (returnCPlusInput[7].value == '8-3') {resultCPlus += 10;}
			if (returnCPlusInput[8].value == '9-4') {resultCPlus += 10;}
			if (returnCPlusInput[9].value == '10-5') {resultCPlus += 10;}
		}());
		(function addJSTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
				'<td class="td-username">'+
					'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
				'</td>'+
				'<td class="td-test-name">'+
					'<p class="nameOfTest">C++</p>'+
				'</td>'+
				'<td class="td-test-persents">'+
					'<p><span class="persents">' + resultCPlus + '</span>% правильных ответов</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-1">Первый вопрос: Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного леса?</span>'+
					'<p class="answer-1">' + returnCPlusTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: A я лежу в высокой траве у быстрого ручья?</span>'+
					'<p class="answer-2">' + returnCPlusTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Взор мой туманится и все вокруг меня и небо надо мной запечатлены в моей душе?</span>'+
					'<p class="answer-3">' + returnCPlusTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

	// C#

	if (returnCSharpInput != 0) {
		(function countJSResult() {
			if (returnCSharpInput[0].value == '1-1') {resultCSharp += 10;}
			if (returnCSharpInput[1].value == '2-2') {resultCSharp += 10;}
			if (returnCSharpInput[2].value == '3-3') {resultCSharp += 10;}
			if (returnCSharpInput[3].value == '4-4') {resultCSharp += 10;}
			if (returnCSharpInput[4].value == '5-5') {resultCSharp += 10;}
			if (returnCSharpInput[5].value == '6-1') {resultCSharp += 10;}
			if (returnCSharpInput[6].value == '7-2') {resultCSharp += 10;}
			if (returnCSharpInput[7].value == '8-3') {resultCSharp += 10;}
			if (returnCSharpInput[8].value == '9-4') {resultCSharp += 10;}
			if (returnCSharpInput[9].value == '10-5') {resultCSharp += 10;}
		}());
		(function addCSharpTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
				'<td class="td-username">'+
					'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
				'</td>'+
				'<td class="td-test-name">'+
					'<p class="nameOfTest">C#</p>'+
				'</td>'+
				'<td class="td-test-persents">'+
					'<p><span class="persents">' + resultCSharp + '</span>% правильных ответов</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-1">Первый вопрос: Ах! Как бы выразить, как бы вдохнуть в рисунок то, что так полно, так трепетно живет во мне?</span>'+
					'<p class="answer-1">' + returnCSharpTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: Запечатлеть отражение моей души, как душа моя - отражение предвечного бога?</span>'+
					'<p class="answer-2">' + returnCSharpTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Друг мой... Но нет! Мне не под силу это, меня подавляет величие этих явлений?</span>'+
					'<p class="answer-3">' + returnCSharpTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

	//Layout

	if (returnLayoutInput != 0) {
		(function countLayoutResult() {
			if (returnLayoutInput[0].value == '1-1') {resultLayout += 10;}
			if (returnLayoutInput[1].value == '2-2') {resultLayout += 10;}
			if (returnLayoutInput[2].value == '3-3') {resultLayout += 10;}
			if (returnLayoutInput[3].value == '4-4') {resultLayout += 10;}
			if (returnLayoutInput[4].value == '5-5') {resultLayout += 10;}
			if (returnLayoutInput[5].value == '6-1') {resultLayout += 10;}
			if (returnLayoutInput[6].value == '7-2') {resultLayout += 10;}
			if (returnLayoutInput[7].value == '8-3') {resultLayout += 10;}
			if (returnLayoutInput[8].value == '9-4') {resultLayout += 10;}
			if (returnLayoutInput[9].value == '10-5') {resultLayout += 10;}
		}());
		(function addLayoutTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
				'<td class="td-username">'+
					'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
				'</td>'+
				'<td class="td-test-name">'+
					'<p class="nameOfTest">Layout</p>'+
				'</td>'+
				'<td class="td-test-persents">'+
					'<p><span class="persents">' + resultLayout + '</span>% правильных ответов</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-1">Первый вопрос: Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником?</span>'+
					'<p class="answer-1">' + returnLayoutTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного леса?</span>'+
					'<p class="answer-2">' + returnLayoutTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Вижу тысячи всевозможных былинок и чувствую, как близок моему сердцу крошечный мирок?</span>'+
					'<p class="answer-3">' + returnLayoutTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

	//English

	if (returnEnglishInput != 0) {
		(function countEnglishResult() {
			if (returnEnglishInput[0].value == '1-1') {resultEnglish += 10;}
			if (returnEnglishInput[1].value == '2-2') {resultEnglish += 10;}
			if (returnEnglishInput[2].value == '3-3') {resultEnglish += 10;}
			if (returnEnglishInput[3].value == '4-4') {resultEnglish += 10;}
			if (returnEnglishInput[4].value == '5-5') {resultEnglish += 10;}
			if (returnEnglishInput[5].value == '6-1') {resultEnglish += 10;}
			if (returnEnglishInput[6].value == '7-2') {resultEnglish += 10;}
			if (returnEnglishInput[7].value == '8-3') {resultEnglish += 10;}
			if (returnEnglishInput[8].value == '9-4') {resultEnglish += 10;}
			if (returnEnglishInput[9].value == '10-5') {resultEnglish += 10;}
		}());
		(function addEnglishTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
				'<td class="td-username">'+
					'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
				'</td>'+
				'<td class="td-test-name">'+
					'<p class="nameOfTest">English</p>'+
				'</td>'+
				'<td class="td-test-persents">'+
					'<p><span class="persents">' + resultEnglish + '</span>% правильных ответов</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-1">Первый вопрос: Душа моя озарена неземной радостью, как эти чудесные весенние утра?</span>'+
					'<p class="answer-1">' + returnEnglishTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: Я совсем один и блаженствую в здешнем краю?</span>'+
					'<p class="answer-2">' + returnEnglishTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого?</span>'+
					'<p class="answer-3">' + returnEnglishTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

	//Soft Skills

	if (returnSSInput != 0) {
		(function countSSResult() {
			if (returnSSInput[0].value == '1-1') {resultSS += 10;}
			if (returnSSInput[1].value == '2-2') {resultSS += 10;}
			if (returnSSInput[2].value == '3-3') {resultSS += 10;}
			if (returnSSInput[3].value == '4-4') {resultSS += 10;}
			if (returnSSInput[4].value == '5-5') {resultSS += 10;}
			if (returnSSInput[5].value == '6-1') {resultSS += 10;}
			if (returnSSInput[6].value == '7-2') {resultSS += 10;}
			if (returnSSInput[7].value == '8-3') {resultSS += 10;}
			if (returnSSInput[8].value == '9-4') {resultSS += 10;}
			if (returnSSInput[9].value == '10-5') {resultSS += 10;}
		}());
		(function addSSTableRow() {
			$('table').append( 
				'<tr class="main-line">'+
				'<td class="td-username">'+
					'<p>Пользователь <a class="username"> ' + nameOfParticipant + '</a></p>'+
				'</td>'+
				'<td class="td-test-name">'+
					'<p class="nameOfTest">Soft Skills</p>'+
				'</td>'+
				'<td class="td-test-persents">'+
					'<p><span class="persents">' + resultSS + '</span>% правильных ответов</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-1">Первый вопрос: Ах! Как бы выразить, как бы вдохнуть в рисунок то, что так полно, так трепетно живет во мне?</span>'+
					'<p class="answer-1">' + returnSSTextarea[0].value + '</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-2">Второй вопрос: Запечатлеть отражение моей души, как душа моя - отражение предвечного бога?</span>'+
					'<p class="answer-2">' + returnSSTextarea[1].value +'</p>'+
				'</td>'+
				'<td class="td-test-write">'+
					'<span class="question-3">Третий вопрос: Друг мой... Но нет! Мне не под силу это, меня подавляет величие этих явлений?</span>'+
					'<p class="answer-3">' + returnSSTextarea[2].value +'</p>' +
				'</td>'+
			'</tr>')
		}());
	}

})
	
