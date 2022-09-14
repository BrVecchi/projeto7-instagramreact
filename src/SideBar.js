import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
  return (
    <div class="box-sideBar">
      <div class="sideBar">
        <Usuario />
        <div class="sugestoes">
          <p>Sugestões para você</p>
          <p class="ver-tudo">Ver tudo</p>
        </div>
        <Sugestoes />
        <div class="links-uteis">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
        </div>
        <div class="direitos-autorais">
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </div>
  );
}
