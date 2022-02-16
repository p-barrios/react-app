
const customFetch = (list, time) => {
    return new Promise((resolve, reject) => {
            setTimeout ( () => {
                if(list){
                    resolve(list)
                }
                else
                    reject('Error al cargar el productList')
            }, time)
    })
}

export default customFetch