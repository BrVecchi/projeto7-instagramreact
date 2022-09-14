import {
  BookmarkOutline,
  ChatbubbleOutline,
  EllipsisHorizontalOutline,
  HappyOutline,
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

export default function Posts() {
  const posts = [
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src={ursocrazy} />
          </div>
          <p>crazybear</p>
        </div>
        <EllipsisHorizontalOutline />
      </div>
      <div class="foto-feed">
        <video width="100%" autoplay muted>
          <source src={videoMP4} type="video/mp4" />
          <source src={videoOGG} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <HeartOutline />
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <BookmarkOutline />
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={respondeAi} />
          <div class="texto">
            Curtido por <span class="strong">loucuratotales</span> e{" "}
            <span class="strong">outras 98.432 pessoas</span>
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
              <p class="negrito">alguem</p>
            </div>
            <div class="texto-comentario">Que vídeo bacana!</div>
          </div>
          <div class="icone-coracao">
            <HeartOutline />
          </div>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <HappyOutline />
        <input type="text" placeholder="Add um comentário..." />
        <p class="publicar">Publicar</p>
      </div>
    </div>,
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src={barked} />
          </div>
          <p>barked</p>
        </div>
        <EllipsisHorizontalOutline />
      </div>
      <div class="foto-feed">
        <img src={dog} />
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <HeartOutline />
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <BookmarkOutline />
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={adorableAnimals} />
          <div class="texto">
            Curtido por <span class="strong">adorableanimals</span> e{" "}
            <span class="strong">outras 99.547 pessoas</span>
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
              <p class="negrito">pessoa</p>
            </div>
            <div class="texto-comentario">Que fofo esse dog!</div>
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
    </div>,
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src={meowed} />
          </div>
          <p>meowed</p>
        </div>
        <EllipsisHorizontalOutline />
      </div>
      <div class="foto-feed">
        <img src={gatoTelefone} />
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <HeartOutline />
            <ChatbubbleOutline />
            <PaperPlaneOutline />
          </div>
          <div class="icones-feed-direita">
            <BookmarkOutline />
          </div>
        </div>
        <div class="curtidas-feed">
          <img src={respondeAi} />
          <div class="texto">
            Curtido por <span class="strong">respondeai</span> e{" "}
            <span class="strong">outras 101.523 pessoas</span>
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
              <p class="negrito">senhor</p>
            </div>
            <div class="texto-comentario">Está assintindo algo bom.. :)</div>
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
    </div>,
  ];

  return (
    <div class="posts">
      <ul>
        {posts.map((post) => (
          <li>{post}</li>
        ))}
      </ul>
    </div>
  );
}
