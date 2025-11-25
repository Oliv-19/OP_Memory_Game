
//const localStorage = window.localStorage

const storage={
    saveData(data){
        localStorage.setItem('data', JSON.stringify(data))
    },
    getData(key){
        return JSON.parse(localStorage.getItem(key))
    },
    saveBestScore(bestScore){
        console.log(bestScore)
        localStorage.setItem('bestScore', JSON.stringify(bestScore))
    },
    getBestScore(){
        return JSON.parse(localStorage.getItem('bestScore'))
    },
    deleteData(dataId){
        localStorage.removeItem(dataId)
    },
    deleteAll(){
        localStorage.clear()
    },
    dataLength(){
        return this.getData('data').length
    },
    isEmpty(){
        return this.dataLength() == 0
    },
}
export default storage