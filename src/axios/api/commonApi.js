import ajax from '../ajax'


export const getRandomPoetry = () => ajax( "https://v1.jinrishici.com/all.json", 'get')
export const api = {
    getRandomPoetry: ajax( "https://v1.jinrishici.com/all.json", 'get')
}