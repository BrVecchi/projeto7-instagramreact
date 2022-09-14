export default function Posts() {
  const posts = [
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src="./imgs/topo-feed/ursocrazy 2.png" />
          </div>
          <p>crazybear</p>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div class="foto-feed">
        <video width="100%" autoplay muted>
          <source src="./videos/video.mp4" type="video/mp4" />
          <source src="./videos/video.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="icones-feed-direta">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="curtidas-feed">
          <img src="./imgs/usuarios/respondeai 2.png" />
          <p>
            Curtido por<pre> </pre>
            <p class="negrito">respondeai</p>
            <pre> </pre> e<pre> </pre>
            <p class="negrito">outras 101.523 pessoas</p>
          </p>
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
          <button class="botao-comentario">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <ion-icon class="icone-comentario" name="happy-outline"></ion-icon>
        <input type="text" placeholder="Add um comentário..." />
        <p class="publicar">Publicar</p>
      </div>
    </div>,
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src="./imgs/topo-feed/barked 2.png" />
          </div>
          <p>barked</p>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div class="foto-feed">
        <img src="./imgs/feed/dog 1.png" />
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="icones-feed-direta">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="curtidas-feed">
          <img src="./imgs/usuarios/adorableanimals 2.png" />
          <p>
            Curtido por <pre> </pre>
            <p class="negrito">adorable_animals</p>
            <pre> </pre> e<pre> </pre>
            <p class="negrito">outras 99.159 pessoas</p>
          </p>
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
          <button class="botao-comentario">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <ion-icon class="icone-comentario" name="happy-outline"></ion-icon>
        <input type="text" placeholder="Add um comentário..." />
        <p class="publicar">Publicar</p>
      </div>
    </div>,
    <div class="feed">
      <div class="topo-feed">
        <div class="usuario-info">
          <div class="usuario-info-img">
            <img src="./imgs/topo-feed/meowed 2.png" />
          </div>
          <p>meowed</p>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div class="foto-feed">
        <img src="./imgs/feed/gato-telefone 1.png" />
      </div>
      <div class="bot-feed">
        <div class="icones-feed">
          <div class="icones-feed-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="icones-feed-direta">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="curtidas-feed">
          <img src="./imgs/usuarios/respondeai 2.png" />
          <p>
            Curtido por <pre> </pre>
            <p class="negrito">respondeai</p>
            <pre> </pre> e<pre> </pre>
            <p class="negrito">outras 101.523 pessoas</p>
          </p>
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
          <button class="botao-comentario">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
        <div class="escrever-comentario"></div>
      </div>
      <div class="input-comentario">
        <ion-icon class="icone-comentario" name="happy-outline"></ion-icon>
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
