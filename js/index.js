// JS for ApataSCOREus

// Set up Slick
console.log($('.one-time'), $('.one-time').length)
$('.one-time').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false,
		draggable: false,
		arrows: false,
});

const $nextButton = $('.js-slick-next');
$nextButton.on('click', ()=>{
	$('.one-time').slick('slickNext');
})
const $prevButton = $('.js-slick-prev');
$prevButton.on('click', ()=>{
	$('.one-time').slick('slickPrev');
})

const freeForm = document.querySelector('.input-box-free');
const nameForm = document.querySelector('.js-fullName');
const emailForm = document.querySelector('.js-email');
const submitButton = document.querySelector('.submit')

// set up Checkbox controls
const checkBox = document.querySelector('.js-checkbox');
const checkBoxText = document.querySelector('.js-decline-text');
const personalInfoForms = document.querySelectorAll('.js-personalInfo')
checkBox.addEventListener('click', () =>{
	if(checkBox.getAttribute('checked')){
		nameForm.value ='';
		emailForm.value = '';
		checkBox.removeAttribute('checked');
		checkBoxText.classList.toggle('inactive');
		toggleInactive(submitButton);
		for(let i=0; i<personalInfoForms.length; i++){
			personalInfoForms[i].classList.toggle('inactive');
		}
	}
	else{
		toggleInactive(submitButton);
		checkBoxText.classList.toggle('inactive');
		for(let i=0; i<personalInfoForms.length; i++){
			personalInfoForms[i].classList.toggle('inactive');
		}
	}
});

// const formList = [freeForm, nameForm, emailForm];

freeForm.addEventListener('blur', ()=>{
	console.log('free input blur');
	console.log(isFormFilled(freeForm));
	if(isFormFilled(freeForm)){
		freeForm.classList.remove('warning');
		toggleInactive(rightArrow);
	}
	else{
		freeForm.classList.add('warning');
	}
		
});


nameForm.addEventListener('blur', ()=>{
	console.log('name input blur');
	if (isFormFilled(nameForm) && isFormFilled(emailForm)){
		console.log('Both Forms Filled')
		nameForm.classList.remove('warning');
		toggleInactive(submitButton);

	}
	else if(!isFormFilled(nameForm)){
		nameForm.classList.add('warning')
	}
});

emailForm.addEventListener('blur', ()=>{
	if (isFormFilled(nameForm) && isFormFilled(emailForm)){
		console.log('Both Forms Filled')
		emailForm.classList.remove('warning');
		toggleInactive(submitButton);

	}
	else if(!isFormFilled(emailForm)){
		emailForm.classList.add('warning')
	}
});

submitButton.addEventListener('click', ()=>{
	characterAnimation.playSegments([happyAnimFrames, happyTransitionFrames, idleAnimFrames], false);
})


// Arrow Buttons
const rightArrowAnim = bodymovin.loadAnimation({
	container: document.querySelector('.js-slick-next'),
  	renderer: 'svg',
  	loop: false,
  	autoplay: false,
  	prerender:false,
  	path: "js/json/data-navigationArrow-right.json",
})

const leftArrowAnim = bodymovin.loadAnimation({
	container: document.querySelector('.js-slick-prev'),
  	renderer: 'svg',
  	loop: false,
  	autoplay: false,
  	prerender:false,
  	path: "js/json/data-navigationArrow-left.json",
})



// -----------------------------------------------------------------

// const rollOutArrow = (arrow) =>{
// 	arrow.playSegments([1,12]);
// }

// const rollInArrow = (arrow) =>{
// 	arrow.playSegments([13,24]);
// }

// -----------------------------------------------------

let isMousedOverRight = false;
rightArrow = document.querySelector('.js-slick-next');
rightArrow.addEventListener('mouseenter', ()=>{
	// if(isMousedOverRight){
	// 	return;
	// }
	// rollOutArrow(rightArrow);
	rightArrowAnim.playSegments([1,12], true);
	isMousedOverRight = true;
})
rightArrow.addEventListener('mouseleave', ()=>{
	// rollInArrow(rightArrow);
	rightArrowAnim.playSegments([13,24], true);
	isMousedOverRight = false;
})

let isMousedOverLeft = false;
leftArrow = document.querySelector('.js-slick-prev');
leftArrow.addEventListener('mouseenter', ()=>{
	// if(isMousedOverLeft){
	// 	return;
	// }
	// rollOutArrow(leftArrow);
	leftArrowAnim.playSegments([1,12], true)
	isMousedOverLeft = true;
})
leftArrow.addEventListener('mouseleave', ()=>{
	// rollInArrow(leftArrow);
	leftArrowAnim.playSegments([13,24], true);
	isMousedOverLeft = false;
});

rightArrow.addEventListener('click', ()=>{
	toggleInactive(rightArrow);
});

leftArrow.addEventListener('click', ()=>{
	toggleInactive(rightArrow);
});





// load Animations for character reaction

const characterAnimation = bodymovin.loadAnimation({
	container: document.querySelector('.bodymovin'),
    renderer: 'svg',
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'js/json/data-characterAnim.json',
});


const idleAnimFrames = [0,24];
const happyAnimFrames = [25, 96];
const happyTransitionFrames = [97, 108];
const curiousAnimFrames = [109, 179];
const curiousTransitionFrames = [180, 191];
const sadAnimFrames = [192, 251];
const sadTransitionFrames = [252, 275];

const playIdleAnimation = () =>{
	characterAnimation.playSegments(idleAnimFrames, true)
	characterAnimation.loop = true;
}

const startAnimation = () =>{
	playIdleAnimation();
}
  
characterAnimation.addEventListener('DOMLoaded',startAnimation);


//Begin general Function Setup

const changeText = (element, newText) =>{
	element.innerHTML = newText;

};

const findResponse = (radioButtonClass) =>{
	// console.log(`Which response is [${radioButtonClass}]?`);
	
	let ratingResponse = 'default';

	if(radioButtonClass === 'rate-one'){
		ratingResponse = 'There were problems';	
	}

	else if(radioButtonClass === 'rate-two'){
		ratingResponse = 'I experienced good things and bad things';
	}

	else if(radioButtonClass === 'rate-three'){
		ratingResponse = 'I had a great time';
	}

	else{
		ratingResponse = 'error';
	}
	return ratingResponse;

};


const characterResponse = (radioButtonName, elementClass) =>{
	const response = findResponse(radioButtonName);
	const element = document.querySelector(elementClass);
	changeText(element, response);
};



const isAnythingChecked = (name) =>{
	const checkedItems = document.querySelectorAll(`input[name=${name}]:checked`);
	return checkedItems.length>0;
}

const isFormFilled = (element)=>{
	console.log('value is', element.value)
	if(element.value.length >0){
		return true
	}
}



const toggleInactive = (element) =>{
	element.classList.toggle('inactive');
}


const findCheckedValue = (name) =>{
	const checkedItems = document.querySelectorAll(`input[name=${name}]:checked`);
	return checkedItems[0].getAttribute('value');
}


const findQuestionTwo = (buttonPressedValue) =>{
	let questionTwoOption = 'default';

	if(buttonPressedValue === 'rate-one'){
		questionTwoOption = 'What can we do better?';	
	}

	else if(buttonPressedValue === 'rate-two'){
		questionTwoOption = 'What made the good things stand out?';
	}

	else if(buttonPressedValue === 'rate-three'){
		questionTwoOption = 'What was your favorite part of your visit?';
	}

	else{
		questionTwoOption = 'error';
	}
	return questionTwoOption;

};

const setQuestionTwo = (value, elementClass) =>{
	const questionTwoText = findQuestionTwo(value);
	const element = document.querySelector(elementClass);
	changeText(element, questionTwoText);

}


const playReaction = (value) =>{
	isPlaying = true;
	console.log(value)
	console.log('in playReaction');
	if(value === 'rate-one'){
		console.log("sad")
		characterAnimation.playSegments([sadAnimFrames, sadTransitionFrames, idleAnimFrames], false);
		// characterAnimation.playSegments(sadTransitionFrames, false);
		isPlaying = false	
	}

	else if(value === 'rate-two'){
		console.log("curious")
		characterAnimation.playSegments([curiousAnimFrames, curiousTransitionFrames, idleAnimFrames], false);
		// characterAnimation.playSegments(curiousTransitionFrames, false);
	}

	else if(value === 'rate-three'){
		console.log("happy")
		characterAnimation.playSegments([happyAnimFrames, happyTransitionFrames, idleAnimFrames], false);
		// characterAnimation.playSegments(happyTransitionFrames, false);
	}

}

// end Function Setup

// Set up Event Listeners for text changes

const listOfButtons = document.querySelectorAll('.rate-star');
for(let i = 0; i <listOfButtons.length; i++){

	listOfButtons[i].addEventListener('mouseover', () => {
			characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
	})
	listOfButtons[i].addEventListener('click', () => {
		// $('input[name=Choose]').attr('checked',false);
		characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
		checkedValue = findCheckedValue('rating');
		setQuestionTwo(checkedValue, '.js-question-two');
		playReaction(checkedValue);
		// toggleInactive(rightArrow);
		rightArrow.classList.toggle('inactive')
	})
	listOfButtons[i].addEventListener('mouseout', () =>{
		if (isAnythingChecked('rating')) {
			checkedValue = findCheckedValue('rating');
			characterResponse(checkedValue, '.js-question-one');
		}

	})

}







// 	// if(isFormFilled(freeInput)){
// 	// 	toggleInactive(rightArrow);
// 	// 	freeInput.classList.remove('warning');
// 	// }
// 	// else{
// 		freeInput.classList.add('warning');
// 	// }
	
// })














