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

function PostImg(props) {
  const [visibilidadeVazio, setVisibilidadeVazio] = React.useState("");
  const [visibilidadeCheio, setVisibilidadeCheio] = React.useState("hidding");
  const [favoritos, setFavoritos] = React.useState("black");
  const [curtidas, setCurtidas] = React.useState(props.likeQtt);

  function preencherCoracao() {
    if (visibilidadeVazio === "") {
      setVisibilidadeVazio("hidding");
      setVisibilidadeCheio("");
    }
  }

  function esvaziarCoracao() {
    if (visibilidadeCheio === "") {
      setVisibilidadeCheio("hidding");
      setVisibilidadeVazio("");
    }
  }

  function mudarCorFavoritos() {
    if (favoritos === "black") {
      setFavoritos("yellow");
    } else {
      setFavoritos("black");
    }
  }

  return (
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src={props.userImg} />
          </div>
          <p>{props.text}</p>
        </div>
        <EllipsisHorizontalOutline />
      </div>
      <div class="foto-feed">
        <img src={props.feedImg} />
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <Heart
              color={"red"}
              cssClasses={visibilidadeCheio}
              onClick={() => esvaziarCoracao()}
            />
            <HeartOutline
              cssClasses={visibilidadeVazio}
              onClick={() => preencherCoracao()}
            />
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <BookmarkOutline
              color={favoritos}
              onClick={() => mudarCorFavoritos()}
            />
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={props.likeImg} />
          <div class="texto">
            Curtido por <span class="strong">{props.likeText}</span> e{" "}
            <span class="strong">
              outras{" "}
              {visibilidadeVazio === "" ? curtidas : Number(curtidas) + 0.001}{" "}
              pessoas
            </span>
          </div>
        </div>
      </div>
      <div class="comentarios">
        <div class="sugestoes">
          <p>Comentários</p>
          <p class="ver-tudo">Ver tudo</p>
        </div>
        <div class="comentario">
          <div class="comentario-comp">
            <div class="quem-comentou">
              <p class="negrito">{props.userComment}</p>
            </div>
            <div class="texto-comentario">{props.textComment}</div>
          </div>
          <div class="icone-coracao">
            <HeartOutline />
          </div>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <HappyOutline class="icone-comentario ion-icon" />
        <input type="text" placeholder="Add um comentário..." />
        <p class="publicar">Publicar</p>
      </div>
    </div>
  );
}

function PostVideo(props) {
  const [coracao, setCoracao] = React.useState("black");
  const [favoritos, setFavoritos] = React.useState("black");
  const [curtidas, setCurtidas] = React.useState(props.likeQtt);

  function mudarCorCoracao() {
    if (coracao === "black") {
      setCoracao("red");
    } else {
      setCoracao("black");
    }
  }

  function mudarCorFavoritos() {
    if (favoritos === "black") {
      setFavoritos("yellow");
    } else {
      setFavoritos("black");
    }
  }
  return (
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src={props.userImg} />
          </div>
          <p>{props.text}</p>
        </div>
        <EllipsisHorizontalOutline />
      </div>
      <div class="foto-feed">
        <video width="100%" autoPlay muted>
          <source src={props.videomp4} type="video/mp4" />
          <source src={props.videoogg} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <HeartOutline color={coracao} onClick={() => mudarCorCoracao()} />
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <BookmarkOutline
              color={favoritos}
              onClick={() => mudarCorFavoritos()}
            />
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={props.likeImg} />
          <div class="texto">
            Curtido por <span class="strong">{props.likeText}</span> e{" "}
            <span class="strong">
              outras {coracao === "black" ? curtidas : Number(curtidas) + 0.001}{" "}
              pessoas
            </span>
          </div>
        </div>
      </div>
      <div class="comentarios">
        <div class="sugestoes">
          <p>Comentários</p>
          <p class="ver-tudo">Ver tudo</p>
        </div>
        <div class="comentario">
          <div class="comentario-comp">
            <div class="quem-comentou">
              <p class="negrito">{props.userComment}</p>
            </div>
            <div class="texto-comentario">{props.textComment}</div>
          </div>
          <div class="icone-coracao">
            <HeartOutline />
          </div>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <HappyOutline class="icone-comentario ion-icon" />
        <input type="text" placeholder="Add um comentário..." />
        <p class="publicar">Publicar</p>
      </div>
    </div>
  );
}

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
