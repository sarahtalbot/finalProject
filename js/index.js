// JS for ApataSCOREus



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
	console.log("mouseouver arrow")
	// if(isMousedOverRight){
	// 	return;
	// }
	// rollOutArrow(rightArrow);
	rightArrowAnim.playSegments([1,12]);
	isMousedOverRight = true;
})
rightArrow.addEventListener('mouseleave', ()=>{
	console.log("mouse out arrow")
	// rollInArrow(rightArrow);
	rightArrowAnim.playSegments([13,24]);
	isMousedOverRight = false;
})

let isMousedOverLeft = false;
leftArrow = document.querySelector('.js-slick-prev');
leftArrow.addEventListener('mouseenter', ()=>{
	console.log("mouseover arrow")
	// if(isMousedOverLeft){
	// 	return;
	// }
	// rollOutArrow(leftArrow);
	leftArrowAnim.playSegments([1,12])
	isMousedOverLeft = true;
})
leftArrow.addEventListener('mouseleave', ()=>{
	console.log("mouse out arrow")
	// rollInArrow(leftArrow);
	leftArrowAnim.playSegments([13,24]);
	isMousedOverLeft = false;
})




// load Animations for character reaction
const animation = bodymovin.loadAnimation({
  container: document.querySelector('.bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "js/json/data-idle.json",
})

const happyAnimation = bodymovin.loadAnimation({
	container: document.querySelector('.bodymovin'),
    renderer: 'svg',
    loop: false,
    prerender: true,
    autoplay: true,
    autoloadSegments: false,
    path: 'js/json/data-happy.json'
})

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
	console.log('in playReaction');
	if(value === 'rate-one'){
		return happyAnimation.play();	
	}

	else if(value === 'rate-two'){
		return happyAnimation.play();
	}

	else if(value === 'rate-three'){
		return happyAnimation.play();
	}

}

// end Function Setup

// Set up Event Listeners
// const $nextButton = $('.js-slick-next');
// const $prevButton = $('.js-slick-prev');
// $nextButton.nextArrow('js-slick-next');
// $prevButton.prevArrow('js-slick-prev');




const listOfButtons = document.querySelectorAll('.rate-star');

for(let i = 0; i <listOfButtons.length; i++){

	listOfButtons[i].addEventListener('mouseover', () => {
		// if(!isAnythingChecked('rating')) {
			characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
		// }
	})
	listOfButtons[i].addEventListener('click', () => {
		characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
		checkedValue = findCheckedValue('rating');
		setQuestionTwo(checkedValue, '.js-question-two');
		playReaction(checkedValue);

	})
	listOfButtons[i].addEventListener('mouseout', () =>{
		if (isAnythingChecked('rating')) {
			checkedValue = findCheckedValue('rating');
			characterResponse(checkedValue, '.js-question-one');
		}

	})

}








