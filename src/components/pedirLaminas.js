import data from "../data/laminas.json";

    const pedirLaminas = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    export default pedirLaminas;