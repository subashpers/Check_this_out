const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.innerHTML = "Yay! 💕 I can’t wait to spend Valentine’s Day with you 💖";
  yesBtn.style.display = "none";
});
