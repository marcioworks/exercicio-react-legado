export function changeValue(e){
    console.log("change value")
    return{
        type:'VALUE_CHANGED',
        payLoad: e.target.value
    }
    
}