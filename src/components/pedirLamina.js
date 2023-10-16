import { useEffect, useState } from "react"



function pedirLamina() {

    const [lamina, setLamina] = useState();

    useEffect(() => {
        fetch(`../src/data/laminas.json`)
            .then(resp => resp.json())
            .then(lamina => setLamina(lamina))
            .catch(error => console.log(error))
    }), []

}

export default pedirLamina