import { LogoInstagram, PaperPlaneOutline } from "react-ionicons";
import logo from "../imgs/logo.png";

export default function NavBarMobile() {
  return (
    <div class="navBar-mobile">
      <LogoInstagram />
      <img src={logo} />
      <PaperPlaneOutline />
    </div>
  );
}
