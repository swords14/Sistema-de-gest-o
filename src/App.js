// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Estoque from './Estoque';
import Produção from './Producao'; // Verifique o nome do arquivo
import Vendas from './Vendas';
import Relatorios from './Relatorio';
import Configuracoes from './Configuracoes';
import Sidebar from './Sidebar';
import Header from './Header';
import './App.css'; // Importar o CSS global

function App() {
    return ( <
        Router >
        <
        div className = "app-container" >
        <
        Header / >
        <
        div className = "main-content" >
        <
        Sidebar / >
        <
        div className = "content" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Dashboard / > }
        /> <
        Route path = "/estoque"
        element = { < Estoque / > }
        /> <
        Route path = "/producao"
        element = { < Produção / > }
        /> <
        Route path = "/vendas"
        element = { < Vendas / > }
        /> <
        Route path = "/relatorios"
        element = { < Relatorios / > }
        /> <
        Route path = "/configuracoes"
        element = { < Configuracoes / > }
        /> < /
        Routes > <
        /div> < /
        div > <
        /div> < /
        Router >
    );
}

export default App;