import {
  Bookmark,
  BookmarkOutline,
  ChatbubbleOutline,
  EllipsisHorizontalOutline,
  HappyOutline,
  Heart,
  HeartOutline,
  PaperPlaneOutline,
} from "react-ionicons";
import React from "react";

export default function PostVideo(props) {
  const [visibilidadeCoracaoVazio, setVisibilidadeCoracaoVazio] =
    React.useState("");
  const [visibilidadeCoracaoCheio, setVisibilidadeCoracaoCheio] =
    React.useState("hidding");
  const [visibilidadeFavoritosVazio, setVisibilidadeFavoritosVazio] =
    React.useState("");
  const [visibilidadeFavoritosCheio, setVisibilidadeFavoritosCheio] =
    React.useState("hidding");
  const [curtidas, setCurtidas] = React.useState(props.likeQtt);

  function preencherCoracao() {
    if (visibilidadeCoracaoVazio === "") {
      setVisibilidadeCoracaoVazio("hidding");
      setVisibilidadeCoracaoCheio("");
    }
  }

  function esvaziarCoracao() {
    if (visibilidadeCoracaoCheio === "") {
      setVisibilidadeCoracaoCheio("hidding");
      setVisibilidadeCoracaoVazio("");
    }
  }

  function preencherFavoritos() {
    if (visibilidadeFavoritosVazio === "") {
      setVisibilidadeFavoritosVazio("hidding");
      setVisibilidadeFavoritosCheio("");
    }
  }

  function esvaziarFavoritos() {
    if (visibilidadeFavoritosCheio === "") {
      setVisibilidadeFavoritosCheio("hidding");
      setVisibilidadeFavoritosVazio("");
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
            <div>
              <Heart
                color={"red"}
                cssClasses={`${visibilidadeCoracaoCheio} hover`}
                onClick={() => esvaziarCoracao()}
              />
              <HeartOutline
                cssClasses={`${visibilidadeCoracaoVazio} hover`}
                onClick={() => preencherCoracao()}
              />
            </div>
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <div>
              <BookmarkOutline
                cssClasses={`${visibilidadeFavoritosVazio} hover`}
                onClick={() => preencherFavoritos()}
              />
              <Bookmark
                color={"black"}
                cssClasses={`${visibilidadeFavoritosCheio} hover`}
                onClick={() => esvaziarFavoritos()}
              />
            </div>
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={props.likeImg} />
          <div class="texto">
            Curtido por <span class="strong">{props.likeText}</span> e{" "}
            <span class="strong">
              outras{" "}
              {visibilidadeCoracaoVazio === ""
                ? curtidas
                : Number(curtidas) + 0.001}{" "}
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
