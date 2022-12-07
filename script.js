const counterDisplay = document.querySelector("h3");
let counter = 0;

//on crée la fonction bubbleMAker
const bubbleMaker = () => {
  //on lui demande de créer un span
  const bubble = document.createElement("span");
  //on lui rajoute la classe .bubble
  bubble.classList.add("bubble");
  //on la rajoute sur le body
  document.body.appendChild(bubble);
  //on génère des bulls avec des tailles aleatoires
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  //on lui donne la direction de façon aléatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
//appeler la fonction bubbleMaker + 3s
setInterval(bubbleMaker, 1000);
