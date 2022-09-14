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

export default function Stories() {
  const stories = [
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={nineGag} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>9gag</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={meowed} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>meowed</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={barked} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>barked</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={nathan} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>nathanwpyle...</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={wawawi} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>wawawiwac...</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={respondeAi} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>respondeai</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={filoModerna} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>filomoderna</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src={memeRiaGourmet} />
        <img class="circulo-stories" src={circuloStories} />
      </div>
      <p>memeriago.</p>
    </div>,
  ];
  return (
    <div class="stories-box">
      <img class="flecha" src={flecha} />
      <ul class="stories">
        {stories.map((story) => (
          <li>{story}</li>
        ))}
      </ul>
    </div>
  );
}
