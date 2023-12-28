import { FaTrashCan, FaHeartCirclePlus, FaHeartCircleXmark } from "react-icons/fa6";
import './colaborador.css';
import random from "random";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const imagemNula = () => {
        if (colaborador.imagem === "") {
            return colaborador.imagem = random.choice(["/imagens/Cat\ astronaut-amico.svg", "/imagens/Cat\ astronaut-bro.svg", "/imagens/Cat\ astronaut-cuate.svg", "/imagens/Cat\ astronaut-pana.svg", "/imagens/Cat\ astronaut-rafiki.svg"]);
        } else {
            return colaborador.imagem;
        }
    }

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 32,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <FaTrashCan 
            size={30}
            className="deletar"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagemNula(colaborador.imagem)} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {
                    colaborador.favorito 
                    ? <FaHeartCircleXmark {...propsFavorito} color="#F51414" />
                    : <FaHeartCirclePlus {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador