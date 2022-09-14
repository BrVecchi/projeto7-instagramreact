export default function Stories() {
  const stories = [
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/9gag 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>9gag</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/meowed 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>meowed</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/barked 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>barked</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/nathanwpylestrangeplanet 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>nathanwpyle...</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/wawawiwacomicsa 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>wawawiwac...</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/respondeai 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>respondeai</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/filomoderna 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>filomoderna</p>
    </div>,
    <div class="story">
      <div class="stories-img">
        <img class="story-img" src="./imgs/memeriagourmet 1.png" />
        <img
          class="circulo-stories"
          src="./imgs/stories_background-removebg-preview.png"
        />
      </div>
      <p>memeriago.</p>
    </div>,
  ];
  return (
    <div class="stories">
      <img class="flecha" src="./imgs/chevron-forward-circle 1 (2).png" />
      <ul>
        {stories.map((story) => (
          <li>{story}</li>
        ))}
      </ul>
    </div>
  );
}
