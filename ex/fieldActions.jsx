export function changeValue(e){
    console.log('mudou')
    return{
        type: 'VALUE_CHANGED',
        payload:e.target.value
    }
}