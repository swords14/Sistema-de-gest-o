// src/components/Dashboard.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie } from 'recharts';

// Dados para os gráficos
const productionData = [
    { name: 'Jan', value: 100 },
    { name: 'Fev', value: 80 },
    { name: 'Mar', value: 120 },
    { name: 'Abr', value: 90 },
    { name: 'Mai', value: 110 },
    { name: 'Jun', value: 130 },
];

const salesData = [
    { name: 'Jan', sales: 3000 },
    { name: 'Fev', sales: 2000 },
    { name: 'Mar', sales: 4000 },
    { name: 'Abr', sales: 3500 },
    { name: 'Mai', sales: 4500 },
    { name: 'Jun', sales: 5000 },
];

const stockData = [
    { name: 'Madeira', value: 400 },
    { name: 'Parafuso', value: 300 },
    { name: 'Cola', value: 200 },
];

const Dashboard = () => {
    return ( <
        div className = "dashboard-container" >
        <
        h2 className = "dashboard-title" > Dashboard < /h2> <
        div className = "dashboard-cards" >
        <
        div className = "card" >
        <
        h3 > Total de Produção < /h3> <
        p className = "card-value" > 1200 m³ < /p> <
        /div> <
        div className = "card" >
        <
        h3 > Total de Vendas < /h3> <
        p className = "card-value" > R$ 200.000 < /p> <
        /div> <
        div className = "card" >
        <
        h3 > Estoque Crítico < /h3> <
        p className = "card-value" > 5 Itens < /p> <
        /div> <
        /div> <
        div className = "dashboard-metrics" >
        <
        div className = "metric" >
        <
        h3 > Métricas de Produção < /h3> <
        p > Produzido hoje: < span className = "metric-value" > 120 m³ < /span></p >
        <
        p > Meta do dia: < span className = "metric-value" > 150 m³ < /span></p >
            <
            /div> <
            div className = "metric" >
            <
            h3 > Estoque Atual < /h3> <
            p > Madeira disponível: < span className = "metric-value" > 300 m³ < /span></p >
            <
            p > Materiais em falta: < span className = "metric-value" > 2 < /span></p >
            <
            /div> <
            div className = "metric" >
            <
            h3 > Vendas do Mês < /h3> <
                p > Total vendido: < span className = "metric-value" > R$ 50.000 < /span></p >
                <
                p > Pedidos pendentes: < span className = "metric-value" > 5 < /span></p >
                <
                /div> <
                /div> <
                div className = "dashboard-charts" >
                <
                div className = "chart" >
                <
                h3 > Produção Semanal < /h3> <
                LineChart width = { 600 }
            height = { 300 }
        data = { productionData } >
        <
        XAxis dataKey = "name" / >
        <
        YAxis / >
        <
        CartesianGrid strokeDasharray = "3 3" / >
        <
        Tooltip / >
        <
        Legend / >
        <
        Line type = "monotone"
        dataKey = "value"
        stroke = "#007bff"
        strokeWidth = { 3 }
        /> <
        /LineChart> <
        /div> <
        div className = "chart" >
        <
        h3 > Vendas Mensais < /h3> <
        BarChart width = { 600 }
        height = { 300 }
        data = { salesData } >
        <
        XAxis dataKey = "name" / >
        <
        YAxis / >
        <
        Tooltip / >
        <
        Legend / >
        <
        Bar dataKey = "sales"
        fill = "#82ca9d" / >
        <
        /BarChart> <
        /div> <
        div className = "chart" >
        <
        h3 > Distribuição de Estoque < /h3> <
        PieChart width = { 400 }
        height = { 300 } >
        <
        Pie data = { stockData }
        dataKey = "value"
        nameKey = "name"
        cx = "50%"
        cy = "50%"
        outerRadius = { 80 }
        fill = "#007bff"
        label / >
        <
        Tooltip / >
        <
        /PieChart> <
        /div> <
        /div> <
        div className = "recent-orders" >
        <
        h3 > Últimos Pedidos < /h3> <
        table >
        <
        thead >
        <
        tr >
        <
        th > ID do Pedido < /th> <
            th > Cliente < /th> <
            th > Valor < /th> <
            th > Status < /th> <
            th > Ações < /th> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td > 001 < /td> <
            td > Cliente A < /td> <
            td > R$ 500 < /td> <
            td className = "status-completed" > Concluído < /td> <
            td >
            <
            button className = "btn btn-view" > Visualizar < /button> <
            button className = "btn btn-edit" > Editar < /button> <
            /td> <
            /tr> <
            tr >
            <
            td > 002 < /td> <
            td > Cliente B < /td> <
            td > R$ 300 < /td> <
            td className = "status-pending" > Pendente < /td> <
            td >
            <
            button className = "btn btn-view" > Visualizar < /button> <
            button className = "btn btn-edit" > Editar < /button> <
            /td> <
            /tr> <
            tr >
            <
            td > 003 < /td> <
            td > Cliente C < /td> <
            td > R$ 700 < /td> <
            td className = "status-completed" > Concluído < /td> <
            td >
            <
            button className = "btn btn-view" > Visualizar < /button> <
            button className = "btn btn-edit" > Editar < /button> <
            /td> <
            /tr> <
            /tbody> <
            /table> <
            /div> <
            /div>
    );
};

export default Dashboard;