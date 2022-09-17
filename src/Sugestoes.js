import badvibes from "./imgs/usuarios/badvibesmemes 1.png";
import chibirdart from "./imgs/usuarios/chibirdart 1.png";
import razoesparaacreditar from "./imgs/usuarios/razoesparaacreditar 1.png";
import adorableanimals from "./imgs/usuarios/adorableanimals 1.png";
import smallcutecats from "./imgs/usuarios/smallcutecats 1.png";

function Sugestao(props) {
  return (
    <div class="contato-sugerido">
      <div class="sugerido-comp">
        <img src={props.img} />
        <div class="usuario-sugerido-info">
          <p>{props.user}</p>
          <p>Segue você</p>
        </div>
      </div>
      <p class="seguir">Seguir</p>
    </div>
  )
}

export default function Sugestoes() {

  const sugestoes = [
    {img: badvibes, user: "bad.vibes.memes"},
    {img: chibirdart, user: "chibirdart"},
    {img: razoesparaacreditar, user: "razoesparaacreditar"},
    {img: adorableanimals, user: "adorable_animals"},
    {img: smallcutecats, user: "smallcutecats"}
  ];
  return (
    <ul class="contatos-sugeridos">
      {sugestoes.map((sugestao) => <Sugestao img={sugestao.img} user={sugestao.user}/>)}
    </ul>
  );
}
