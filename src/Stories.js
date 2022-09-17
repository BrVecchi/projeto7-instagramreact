import nineGag from "./imgs/9gag 1.png";
import circuloStories from "./imgs/stories_background-removebg-preview.png";
import meowed from "./imgs/meowed 1.png";
import barked from "./imgs/barked 1.png";
import nathan from "./imgs/nathanwpylestrangeplanet 1.png";
import wawawi from "./imgs/wawawiwacomicsa 1.png";
import respondeAi from "./imgs/respondeai 1.png";
import filoModerna from "./imgs/filomoderna 1.png";
import memeRiaGourmet from "./imgs/memeriagourmet 1.png";
import flecha from "./imgs/chevron-forward-circle 1 (2).png";

function Story(props) {
  return (
    <li class="story">
      <div class="stories-img">
        <img class="story-img" src={props.imagem} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>{props.texto}</p>
    </li>
  );
}

export default function Stories() {
  const stories = [
    { imagem: nineGag, texto: "9gag" },
    { imagem: meowed, texto: "meowed" },
    { imagem: barked, texto: "barked" },
    { imagem: nathan, texto: "nathanwpyle..." },
    { imagem: wawawi, texto: "wawawiwac..." },
    { imagem: respondeAi, texto: "respondeai" },
    { imagem: filoModerna, texto: "filomoderna" },
    { imagem: memeRiaGourmet, texto: "memeriago" },
  ];
  return (
    <ul class="stories">
      <img class="flecha" src={flecha} />
      {stories.map((story) => (
        <Story imagem={story.imagem} texto={story.texto} />
      ))}
    </ul>
  );
}
