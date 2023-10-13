export default function about(){
    let delete_icon_trash=document.getElementById('history_delete_icon');
    let history_add=document.getElementById('history')
    let about_info=document.getElementById('about_info')
    let about=document.getElementById('about')
delete_icon_trash.addEventListener('click',()=>{                
if(history_add.style.transform=="translateX(0%)"){
    history_add.style.transform="translateX(-120%)"
    history_add.style.boxShadow="none"
    }
else{
    about.style.transform="translateX(-120%)"
    about.style.boxShadow="none"
    history_add.style.borderRadius="0 0 12px 12px"
    history_add.style.transform="translateX(0%)"
    history_add.style.boxShadow="0 0 10px 10000px rgba(0, 0, 0, .7)"
   }
})
about_info.addEventListener('click',()=>{
    if(about.style.transform=="translateX(0%)"){
        about.style.transform="translateX(-120%)"
        about.style.boxShadow="none"
        }
    else{
        history_add.style.transform="translateX(-120%)"
        history_add.style.boxShadow="none"
        about.style.transform="translateX(0%)"
        about.style.boxShadow="0 0 10px 10000px rgba(0, 0, 0, .7)"
       }
})
}