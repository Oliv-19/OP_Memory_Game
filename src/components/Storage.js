
const storage={
    saveData(data){
        localStorage.setItem('data', JSON.stringify(data))
    },
    getData(key){
        return JSON.parse(localStorage.getItem(key))
    },
    saveBestScore(bestScore){
        localStorage.setItem('bestScore', bestScore)
    },
    getBestScore(){
        return localStorage.getItem('bestScore')
    },
    deleteData(dataId){
        localStorage.removeItem(dataId)
    },
    deleteAll(){
        localStorage.clear()
    },
    dataLength(){
        return this.getData('data')?.length 
    },
    isEmpty(){
        return this.dataLength() == 0
    },
}
export default storage