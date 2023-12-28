import './Titulo.css';

const Titulo = ({ toggleFormulario }) => {

    return (
        <div className='container-cabecalho'>
            <div className='titulo'>
                <h1>Minha organização</h1>
                <span className='linha'></span>
            </div>
            <img
                alt="adicionar time e colacorador"
                src="imagens/Botao-add.svg"
                onClick={toggleFormulario}
            />
        </div>
    );
}

export default Titulo;