import BotMobile from "./Mobile/BotMobile";
import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="principal">
        <Stories />
        <Posts />
        <BotMobile />
      </div>
      <SideBar />
    </div>
  );
}
