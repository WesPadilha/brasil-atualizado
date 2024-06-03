import React, { useState } from 'react';
import '../../../App.css';
import Mapa from '../mapa/index';
import CovidData from '../../../CovidData';
import { NavLink } from 'react-router-dom';


const regions = {
    'Centro-Oeste': ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'],
    'Nordeste': [
        'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco',
        'Piauí', 'Rio Grande do Norte', 'Sergipe'
    ],
    'Norte': ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'],
    'Sudeste': ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'],
    'Sul': ['Paraná', 'Rio Grande do Sul', 'Santa Catarina']
};

function Inicio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showText, setShowText] = useState(false);
    const [regionFilter, setRegionFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [filteredStates, setFilteredStates] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegionFilter(selectedRegion);
        const statesInRegion = regions[selectedRegion] || [];
        setFilteredStates(statesInRegion);
        setStateFilter('');
    };

    const handleStateChange = (e) => {
        setStateFilter(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateFilter(e.target.value);
        console.log('dateFilter');
        console.log(dateFilter);
        console.log('dateFilter');
    };

    const handleFilterClick = () => {
        setShowText(true);
    };

    const handleCloseClick = () => {
        setShowText(false);
    };

    return (
        <>
            <div className='cabecalho'>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu ${menuOpen ? 'show' : ''}`}>
                    <div className='div-filtros'>
                        <h2 className='cor-espaco'>-------------------------</h2>
                        <h3>Região</h3>
                        <select name="region" className="borda-filtro" onChange={handleRegionChange}>
                            <option value="">Selecione a região</option>
                            {Object.keys(regions).map(region => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                        <h2 className='cor-espaco'>-------------------------</h2>
                        <h3>Estado</h3>
                        <select name="state" className="borda-filtro" onChange={handleStateChange} value={stateFilter}>
                            <option value="">Selecione o estado</option>
                            {filteredStates.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                    
                </div>
            </div>
            <div className="info">
                <div className='magem'>
                    <h2 className='titulo'>Portal COVID-19 - Sua pesquisa sobre a COVID-19</h2>
                    <div className='div-container'>
                        <div className='div-mapa'>
                            <Mapa />
                        </div>
                        <div className='descricao'>
    <p><strong>Bem-vindo ao Portal Covid!</strong> Encontre informações detalhadas sobre os casos de COVID-19 em todo o país.</p>
    <p>Use a barra de pesquisa ou o mapa interativo para selecionar um estado e acessar gráficos detalhados.</p>
    <p>Clique no mapa para visualizar painéis com gráficos de pizza e dados numéricos.</p>
    <p>Utilize os filtros para segmentar dados por região e obter uma análise precisa, ou digite <strong>todos</strong> no campo de pesquisa, pra ter uma visao de todos os estados</p>
    <p>Mantenha-se informado sobre a situação da COVID-19 no Brasil.</p>
</div>



                    </div>
                    <CovidData region={regionFilter} state={stateFilter} date={dateFilter} />
                </div>
            </div>
        </>
    );
}

export default Inicio;