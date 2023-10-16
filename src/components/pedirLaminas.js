import data from "../data/laminas.json";


    const pedirLaminas = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(data)
            }, 2000)
            
        })
    }

    export default pedirLaminas;