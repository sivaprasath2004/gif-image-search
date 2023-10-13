export default function screen_mode(){
let lightmode=document.getElementById('light')
lightmode.addEventListener('click',()=>{
    document.body.classList.toggle("light");
    if(document.body.classList.contains('light')){
        lightmode.src="moon (1).png"
        lightmode.style.height="20px"
        lightmode.style.width="20px"
        lightmode.style.padding="7px"
    }
    else{
        lightmode.src="sun.png"
        lightmode.style.height="30px"
        lightmode.style.width="30px"
        lightmode.style.padding="3px"
    }
})  
}