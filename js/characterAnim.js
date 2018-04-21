
// const animationContainer = document.getElementByClassName("lottie");

// const animData = {
//   container: animationContainer,
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   // rendererSettings: {
//   //   preserveAspectRatio: "xMidYMid meet",
//   // },
//   path: "js/json/data-idle.json",
// };

// anim = lottie.loadAnimation(animData);
// lottie_api.createAnimationApi(anim);


const animation = bodymovin.loadAnimation({
  container: document.getElementByClassName('bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "js/json/data-idle.json",
})