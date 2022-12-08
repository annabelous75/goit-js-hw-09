function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  let timerId=null;
const refs={
    start:document.querySelector("button[data-start]"),
    stop:document.querySelector("button[data-stop]"),
};
refs.start.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color=getRandomHexColor();
        document.body.style.background=color;
    }, 1000);
    refs.start.disabled=true;
    refs.stop.disabled=false;
});


refs.stop.addEventListener("click", () => {
    clearInterval(timerId);
    refs.stop.disabled=true;
    refs.start.disabled=false;
  });