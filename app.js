const toggle = document.getElementById("toggle"),
  contentToggle = document.getElementById("contentToggle"),
  close = document.getElementById("close"),
  plus = document.getElementById("plus");

const toggle2 = document.getElementById("toggle2"),
  contentToggle2 = document.getElementById("contentToggle2"),
  close2 = document.getElementById("close2"),
  plus2 = document.getElementById("plus2");

const toggle3 = document.getElementById("toggle3"),
  contentToggle3 = document.getElementById("contentToggle3"),
  close3 = document.getElementById("close3"),
  plus3 = document.getElementById("plus3");

toggle.addEventListener("click", () => {
  (contentToggle.classList.toggle("hidden"),
    close.classList.toggle("hidden"),
    plus.classList.toggle("hidden"));
});
toggle2.addEventListener("click", () => {
  (contentToggle2.classList.toggle("hidden"),
    close2.classList.toggle("hidden"),
    plus2.classList.toggle("hidden"));
});
toggle3.addEventListener("click", () => {
  (contentToggle3.classList.toggle("hidden"),
    close3.classList.toggle("hidden"),
    plus3.classList.toggle("hidden"));
});
