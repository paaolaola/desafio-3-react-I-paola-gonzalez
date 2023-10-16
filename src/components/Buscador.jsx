import { useState } from "react";
import React from "react";

function Buscador({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleChangeSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        console.log(inputValue);
        setSearch(inputValue);
        onSearch(inputValue);
    };

    return <input className="searchCol" type="text" placeholder="Buscar colaborador" value={search} onChange={handleChangeSearch} />;
}

export default Buscador;
