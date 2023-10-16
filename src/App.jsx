import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Listado from "./components/Listado";

function App() {
    return (
        <div className="App">
            <h2>Lista de Colaboradores</h2>

            <div className="containerList">
                <Listado />
            </div>
        </div>
    );
}

export default App;
