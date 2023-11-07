//* ======================================================
//*            CAPTURING (EVENT PROPAGATION)
//* ======================================================

//! Capturing'de olay, ilk olarak dış elementte yakalanir ve içteki elementlere dogru yayilir.
//! eventTarget.addEventListener(type,listener,[useCapture]);

document
  .querySelector("form")
  .addEventListener("click", () => alert("form"), true)

document
  .querySelector("div")
  .addEventListener("click", () => alert("div"), true)

document.querySelector("p").addEventListener("click", () => alert("p"), true)
