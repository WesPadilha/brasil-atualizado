import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/pages/Mapa';
import graficoPizza from './components/assets/img/grafico pizza.png';
import graficoColuna from './components/assets/img/gafico coluna.png';
import CovidData from './CovidData'; // Importa o componente

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFilterClick = () => {
    setShowText(true);
  };

  const handleCloseClick = () => {
    setShowText(false);
  };

  return (
    <>
      <div className='cabeçalho'>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`menu ${menuOpen ? 'show' : ''}`}>
          <div className='div-filtros'>
            <h2 className='cor-espaco'>-------------------------</h2>
            <h3>Região</h3>
            <select name="" className="borda-filtro">
                <option>Selecione a região</option>
                <option>Centro-Oeste</option>
                <option>Nordeste</option>
                <option>Norte</option>
                <option>Sudeste</option>
                <option>Sul</option>
            </select>

            <h2 className='cor-espaco'>-------------------------</h2>

            <h3>Estado</h3>
            <select name="estado" className="borda-filtro">
                <option value="">Selecione o estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>

            <h2 className='cor-espaco'>-------------------------</h2>

            <h3>Periodo</h3>
            <label htmlFor="data"></label>
            <input type="date" id="data" name="data" className="borda-filtro"></input>
          </div>
          <div className="div-botao-filtro">
            <button className="botao-filtro" onClick={handleFilterClick}>Filtrar</button>
          </div>
        </div>
      </div>

      <div className="App">
        <h1 className='cor-espaco'>Vai Brasil</h1>
          <div className='div-mapa'>
            <Mapa />
          </div>
          {showText && (
            <div className="dashboard">
              <button className="fechar-dashboard" onClick={handleCloseClick}>X</button>         
              <div>
                <h1>Mortes</h1>
                <p>1000</p>
                <h1>Casos</h1>
                <p>1000</p>
              </div>
              <div>
                <img src={graficoPizza} width={200} height={200} alt="Gráfico de Pizza" />
              </div>
              <div>
              <h1>Porcentagens</h1>
                <p>1000%</p>
              </div>
              <div>
                <img src={graficoColuna} width={200} height={200} alt="Gráfico de Coluna" />
              </div>
            </div>
          )}
        <CovidData /> {/* Adicione o componente CovidData aqui */}
      </div>
    </>
  );
}

export default App;
