import {
  CompassOutline,
  HeartOutline,
  LogoInstagram,
  LogoIonic,
  PaperPlaneOutline,
  PersonOutline,
} from "react-ionicons";
import logo from "./imgs/logo.png";
export default function NavBar() {
  return (
    <div class="navBar">
      <div class="navBar-usual">
        <div class="logo-navBar">
          <LogoInstagram class="icone-navBar ion-icon" />
          <div class="linha-vertical"></div>
          <img src={logo} />
        </div>
        <div class="pesquisar-navBar">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones-navBar">
          <PaperPlaneOutline class="icone-navBar ion-icon" />
          <CompassOutline class="icone-navBar ion-icon" />
          <HeartOutline class="icone-navBar ion-icon" />
          <PersonOutline class="icone-navBar ion-icon" />
        </div>
      </div>
    </div>
  );
}
