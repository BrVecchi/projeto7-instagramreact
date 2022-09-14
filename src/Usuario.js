import usuario from "./imgs/catanacomics 1.png";

export default function Usuario() {
  return (
    <div class="info-pessoal">
      <img src={usuario} />
      <div class="usuario-principal-info">
        <p>catanacomics</p>
        <p>Catana</p>
      </div>
    </div>
  );
}
