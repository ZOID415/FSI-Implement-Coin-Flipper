// TODO: Declare any global variables we need
let tails = 0;
let tailsPercent = 0;
let heads = 0;
let headsPercent = 0;
let total = heads + tails;

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Add event listener and handler for flip and clear buttons
  document.querySelector("#flip").addEventListener("click", function () {
    let randomChance = Math.random();
    console.log(randomChance);

    if (randomChance < 0.495) {
      //You Flipped Tails!
      document.querySelector("#penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.querySelector("#message").textContent = "You Flipped Tails!";
      tails++;
      total++;
      tailsPercent = Math.round((tails / total) * 100);
      document.querySelector("#tails").textContent = tails;
      document.querySelector("#tails-percent").textContent = tailsPercent + "%";
      if (heads > 0) {
        headsPercent = Math.round((heads / total) * 100);
        document.querySelector("#heads-percent").textContent =
          headsPercent + "%";
      }
    } else {
      //You Flipped Heads!
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = "You Flipped Heads!";
      heads++;
      total++;
      headsPercent = Math.round((heads / total) * 100);
      document.querySelector("#heads").textContent = heads;
      document.querySelector("#heads-percent").textContent = headsPercent + "%";
      if (tails > 0) {
        tailsPercent = Math.round((tails / total) * 100);
        document.querySelector("#tails-percent").textContent =
          tailsPercent + "%";
      }
    }
  });
  document.querySelector("#clear").addEventListener("click", function () {
    tails = 0;
    tailsPercent = 0;
    heads = 0;
    headsPercent = 0;
    total = heads + tails;
    document.querySelector("#tails").textContent = 0;
    document.querySelector("#tails-percent").textContent = 0 + "%";
    document.querySelector("#heads").textContent = 0;
    document.querySelector("#heads-percent").textContent = 0 + "%";
    document.querySelector("#penny-image").src =
      "./assets/images/penny-heads.jpg";
    document.querySelector("#message").textContent = "Let's Get Flipping!";
  });
});
