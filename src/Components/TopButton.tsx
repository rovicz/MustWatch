import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import initScrollTop from "./TopButtonFunction";

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
