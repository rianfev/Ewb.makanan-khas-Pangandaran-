document.getElementById("btnJelajah").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("makanan").offsetTop,
    behavior: "smooth"
  });
});