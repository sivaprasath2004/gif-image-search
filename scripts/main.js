export default function historyItems(){
let input=document.getElementById('text');
let array=[]
let history=[]
let button=document.getElementById('button');
function display_result(i){
    let history_add=document.getElementById('history')
    let history_displaytag=document.createElement('h3')
    let historys=document.createElement('p')
    let delete_icon=document.createElement('span') 
    delete_icon.id="delete" 
    delete_icon.innerHTML="+"   
    history_add.append(history_displaytag) 
    history_displaytag.appendChild(historys)
    history_displaytag.appendChild(delete_icon)   
    historys.innerText=i
    delete_icon.addEventListener('click',()=>{  
    history_displaytag.remove(history_displaytag)
    removeElement(i)
    })
}
window.onload=()=>{
history=JSON.parse(localStorage.getItem('history'))|| []
if(history[0]==''){
console.log('nothing')
}
else{
history.forEach(i =>{
array.push(i)
display_result(i)  
});
}
}
function removeElement(i){
    let num=array.indexOf(i)
    if(num>-1){
        array.splice(num,1)
    }
    localStorage.setItem('history',JSON.stringify(array))
}
button.addEventListener('click',()=>{
if(input.value==''){
    console.log('hello')        
}
else{  
    display_result(input.value) 
    array.push(input.value)
    input.value='' 
    localStorage.setItem('history',JSON.stringify(array))
}           
}) 
}
