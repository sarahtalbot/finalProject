

// -----------------------------------------
const animation = bodymovin.loadAnimation({
  container: document.querySelector('.bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "js/json/data-idle.json",
})


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
rightArrow.addEventListener('mouseout', ()=>{
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
leftArrow.addEventListener('mouseout', ()=>{
	console.log("mouse out arrow")
	// rollInArrow(leftArrow);
	leftArrowAnim.playSegments([13,24]);
	isMousedOverLeft = false;
})








