import {
  CompassOutline,
  HeartOutline,
  LogoInstagram,
  PaperPlaneOutline,
  PersonOutline,
} from "react-ionicons";
import logo from "./imgs/logo.png";
export default function NavBar() {
  return (
    <div class="navBar">
      <div class="navBar-usual">
        <div class="logo-navBar">
          <LogoInstagram />
          <div class="linha-vertical"></div>
          <img src={logo} />
        </div>
        <div class="pesquisar-navBar">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones-navBar">
          <PaperPlaneOutline />
          <CompassOutline />
          <HeartOutline />
          <PersonOutline />
        </div>
      </div>
    </div>
  );
}
