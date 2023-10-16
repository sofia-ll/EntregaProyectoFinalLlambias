import data from "../data/laminas.json";

const pedirLaminaPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}

export default pedirLaminaPorId