import { useContext } from "react";
import AppContext from "../provider/appContext";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);

  const anchorStyle = {
    color: "#C6C6C6",
  };

  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/Froxy555"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <AiFillGithub /> <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hevesi-tamás-a25641270/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <FaLinkedinIn /> <span>LinkedIn</span>
        </a>

        <a
          href="https://twitter.com/tom_hevesi"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <AiOutlineTwitter /> <span>Twitter</span>
        </a>

        <a
          href="https://www.instagram.com/tom_hevesi/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <AiFillInstagram /> <span>Instagram</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;