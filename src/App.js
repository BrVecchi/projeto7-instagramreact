import NavBar from "./NavBar";
import NavBarMobile from "./Mobile/NavBarMobile";
import Corpo from "./Corpo";

export default function App() {
  return (
    <div class="divApp">
      <NavBar />
      <NavBarMobile />
      <Corpo />
    </div>
  );
}
