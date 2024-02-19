import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import Instagram from "../Images/instagram.png";
import tiktok from "../Images/tik-tok.png";
function Footer() {
  return (
    <div id="footer">
      <div id="redi">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>
      <div id="socialMedia">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
        <img src={tiktok} alt="TikTok" />
      </div>
      <div id="copyright">
        <span className="material-symbols-outlined">copyright</span>Logo, Inc.
      </div>
    </div>
  );
}

export default Footer;
