import {
  BookmarkOutline,
  ChatbubbleOutline,
  EllipsisHorizontalOutline,
  HappyOutline,
  Heart,
  HeartOutline,
  PaperPlaneOutline,
} from "react-ionicons";

import videoMP4 from "./videos/video.mp4";
import videoOGG from "./videos/video.ogg";
import ursocrazy from "./imgs/topo-feed/ursocrazy 2.png";
import respondeAi from "./imgs/usuarios/respondeai 2.png";
import barked from "./imgs/topo-feed/barked 2.png";
import dog from "./imgs/feed/dog 1.png";
import adorableAnimals from "./imgs/usuarios/adorableanimals 2.png";
import meowed from "./imgs/topo-feed/meowed 2.png";
import gatoTelefone from "./imgs/feed/gato-telefone 1.png";
import React from "react";
import PostVideo from "./PostsVideo";
import PostImg from "./PostsImg";

export default function Posts() {
  const postsImg = [
    {
      userImg: barked,
      text: "barked",
      feedImg: dog,
      likeImg: adorableAnimals,
      likeText: "adorableAnimals",
      likeQtt: "99.547",
      userComment: "Pessoa",
      textComment: "Que fofo esse dog!",
    },
    {
      userImg: meowed,
      text: "meowed",
      feedImg: gatoTelefone,
      likeImg: respondeAi,
      likeText: "respondeAi",
      likeQtt: "101.523",
      userComment: "Senhor",
      textComment: "Está assintindo algo bom.. :)",
    },
  ];

  const postsVideo = [
    {
      userImg: ursocrazy,
      text: "crazybear",
      videomp4: videoMP4,
      videoogg: videoOGG,
      likeImg: respondeAi,
      likeText: "loucuratotales",
      likeQtt: "98.432",
      userComment: "Alguém",
      textComment: "Que vídeo bacana! =O",
    },
  ];

  return (
    <div class="posts">
      {postsVideo.map((post) => (
        <PostVideo
          userImg={post.userImg}
          text={post.text}
          videomp4={post.videomp4}
          videoogg={post.videoogg}
          likeImg={post.likeImg}
          likeText={post.likeText}
          likeQtt={post.likeQtt}
          userComment={post.userComment}
          textComment={post.textComment}
        />
      ))}
      {postsImg.map((post) => (
        <PostImg
          userImg={post.userImg}
          text={post.text}
          feedImg={post.feedImg}
          likeImg={post.likeImg}
          likeText={post.likeText}
          likeQtt={post.likeQtt}
          userComment={post.userComment}
          textComment={post.textComment}
        />
      ))}
    </div>
  );
}
