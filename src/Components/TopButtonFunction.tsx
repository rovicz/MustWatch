export default function initScrollTop() {
  const button = document.getElementById("topButton") as HTMLButtonElement;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
      button.style.animation = "textDown 0.3s";
    } else {
      button.style.display = "none";
    }
  }

  function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  button.addEventListener("click", topScroll);
}
