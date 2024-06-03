import { Routes, Route, } from 'react-router-dom'

import Inicio from '../components/pages/inicio/index.js';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
           
        </Routes>
    )
}

export default RoutesApp;