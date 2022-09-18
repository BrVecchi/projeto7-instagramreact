import React from "react";
import { Pencil } from "react-ionicons";
import usuario from "./imgs/catanacomics 1.png";

function UsuarioInfo(props) {
  const [nome, setNome] = React.useState("Catana");
  const [img, setImg] = React.useState(usuario);

  return (
    <div class="info-pessoal">
      <img
        class="usuario-principal-img hover"
        src={img}
        onClick={() => {
          const novaImg = prompt("Digite a URL da nova imagem: ");
          if (novaImg !== null && novaImg !== "") {
            setImg(novaImg);
          }
        }}
      />
      <div class="usuario-principal-info">
        <p class="usuario-principal-texto-user">{props.textUser}</p>
        <div class="nome-lapis">
          <p class="usuario-principal-texto-name">{nome}</p>
          <Pencil
            cssClasses={"hover"}
            height={"14px"}
            width={"14px"}
            onClick={() => {
              const novoNome = prompt("Qual nome quer colocar?");
              if (novoNome !== null && novoNome !== "") {
                setNome(novoNome);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Usuario() {
  const usuariosInfo = [{ img: usuario, textUser: "catanacomics" }];

  return (
    <>
      {usuariosInfo.map((u) => (
        <UsuarioInfo img={u.img} textUser={u.textUser} />
      ))}
    </>
  );
}
