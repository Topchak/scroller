document.addEventListener("DOMContentLoaded", () =>  {
  const mainH3 = document.querySelector("main h3");
  const btn = document.querySelector("main button");
  btn.addEventListener('click', () =>{
    mainH3.classList.toggle("close");
  });

});
