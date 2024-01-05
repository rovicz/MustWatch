import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function initScrollTop() {
  const button = document.getElementById("topButton") as HTMLButtonElement;
  const buttonSVG = document.querySelector("#topButton svg") as SVGAElement;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
      button.style.animation = "dropDown 0.3s";
      buttonSVG.style.animation = "dropDown 0.3s";
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

const TopButton = () => {
  window.onload = function () {
    initScrollTop();
  };
  return (
    <div>
      <a id="topButton">
        <MdOutlineKeyboardDoubleArrowUp />
      </a>
    </div>
  );
};

export default TopButton;
