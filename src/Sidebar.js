// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Importar o CSS para o Sidebar

const Sidebar = () => {
    return ( <
        div className = "sidebar" >
        <
        h2 > Serraria Gestão < /h2> <
        ul >
        <
        li > < Link to = "/" > Dashboard < /Link></li >
        <
        li > < Link to = "/estoque" > Estoque < /Link></li >
        <
        li > < Link to = "/producao" > Produção < /Link></li >
        <
        li > < Link to = "/vendas" > Vendas < /Link></li >
        <
        li > < Link to = "/relatorios" > Relatórios < /Link></li >
        <
        li > < Link to = "/configuracoes" > Configurações < /Link></li >
        <
        /ul> <
        /div>
    );
};

export default Sidebar;