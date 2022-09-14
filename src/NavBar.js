import {
  CompassOutline,
  HeartOutline,
  LogoInstagram,
  LogoIonic,
  PaperPlaneOutline,
  PersonOutline,
} from "react-ionicons";
export default function NavBar() {
  return (
    <div class="navBar">
      <div class="navBar-usual">
        <div class="logo-navBar">
          <LogoInstagram class="icone-navBar" />
          <div class="linha-vertical"></div>
          <img src="./imgs/logo.png" />
        </div>
        <div class="pesquisar-navBar">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones-navBar">
          <PaperPlaneOutline class="icone-navBar" />
          <CompassOutline class="icone-navBar" />
          <HeartOutline class="icone-navBar" />
          <PersonOutline class="icone-navBar" />
        </div>
      </div>
    </div>
  );
}
