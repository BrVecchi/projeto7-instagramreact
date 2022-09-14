import badvibes from "./imgs/usuarios/badvibesmemes 1.png";
import chibirdart from "./imgs/usuarios/chibirdart 1.png";
import razoesparaacreditar from "./imgs/usuarios/razoesparaacreditar 1.png";
import adorableanimals from "./imgs/usuarios/adorableanimals 1.png";
import smallcutecats from "./imgs/usuarios/smallcutecats 1.png";

export default function Sugestoes() {
  const sugestoes = [
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={badvibes} />
        <div class="usuario-sugerido-info">
          <p>bad.vibes.memes</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>,
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={chibirdart} />
        <div class="usuario-sugerido-info">
          <p>chibirdart</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>,
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={razoesparaacreditar} />
        <div class="usuario-sugerido-info">
          <p>razoesparaacreditar</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>,
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={adorableanimals} />
        <div class="usuario-sugerido-info">
          <p>adorable_animals</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>,
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={smallcutecats} />
        <div class="usuario-sugerido-info">
          <p>smallcutecats</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>,
  ];
  return (
    <ul class="contatos-sugeridos">
      {sugestoes.map((sugestao) => (
        <li>{sugestao}</li>
      ))}
    </ul>
  );
}
