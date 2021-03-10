let Menu=document.querySelector('#menu')
Menu.addEventListener('click',()=>{
    if(MenuItem.style.maxHeight=="0px"){
        MenuItem.style.maxHeight="250px"
    }
    else{
        MenuItem.style.maxHeight="0px"
    } 
})
let MenuItem=document.querySelector('#menu-item')
MenuItem.style.maxHeight="0px";





let smallproduct=document.getElementsByClassName('small-img')
let product=document.getElementById('product-img')

smallproduct[0].onclick=function(){
    product.src=smallproduct[0].src
}
smallproduct[1].onclick=function(){
    product.src=smallproduct[1].src
}
smallproduct[2].onclick=function(){
    product.src=smallproduct[2].src
}
smallproduct[3].onclick=function(){
    product.src=smallproduct[3].src
}












