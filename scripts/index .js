import './style.css'
export default function api(){
let button=document.getElementById('button')
button.addEventListener('click',()=>{
    let loading_page=document.getElementById('loading_page')
    loading_page.style.display='block';
    let div_tag=document.getElementById('images_display')
    div_tag.innerHTML=''
    let q=document.getElementById('text').value;
    let URL=`https://api.giphy.com/v1/gifs/search?api_key=BOPMB3q5ddE4mJJgEgHvaaLkHkoKFmaG&q=${q}&limit=25&offset=0&rating=g&lang=en`;
    fetch(URL)
    .then((res)=>res.json())
    .then((result)=>{
        let arr=Object.values(result.data)
        console.log(arr)
        arr.forEach( gif=> {
            console.log(gif.images.downsized.url)
            let image=document.createElement('img');
            image.setAttribute('src',gif.images.downsized.url)
            div_tag.appendChild(image)
        });
        loading_page.style.display='none';
    })
})
let btn=document.getElementById('home_button')
btn.addEventListener('click',()=>{
    creater.style.display='block'
    delete_icon.style.display="block"
})
}