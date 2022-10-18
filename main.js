let images = document.querySelectorAll(".other-img img");
let myimg = document.querySelector(".myimg");
let myimgtwo = document.querySelector(".myimgtwo");
let cartICon = document.querySelector('.cart')
let cartIConImg = document.querySelector('.cart img')
let item = document.querySelector('.cart .numbers');
let itemsNumbers;
if (localStorage.getItem('Cart-Products')) {
    itemsNumbers = localStorage.getItem('Cart-Products')
}
item.textContent = itemsNumbers 

cartIConImg.addEventListener('click', function () {
    cartICon.classList.toggle('active')
})
images.forEach((e)=> {
    let myattr = e.getAttribute('data-src')
    e.addEventListener('click',(e)=>{
        myimg.src = myattr
        myimgtwo.src = myattr
    } )
}) 
//
myimg.onclick = function() {
    document.querySelector('.max-show').classList.add('active')
}
document.querySelector('.close').onclick = function() {

    document.querySelector('.max-show').classList.remove('active')

}
// First Task Done
function addToCart() {
    let productprice = 125.00;
    let myValue = document.querySelector('#num').value;
    // Create Cart Items
    let card = document.createElement("div");  
    let deleteIcon = document.createElement("img");
    deleteIcon.setAttribute('src','images/icon-delete.svg');
    deleteIcon.classList.add('deleteicon');
    card.classList.add('holder')
    let contentdiv = document.createElement("div")
    contentdiv.classList.add('content')
    let img = document.createElement('img');
    let imgsrc = myimg.src;
    img.setAttribute('src',imgsrc)
    card.prepend(img);
    // create text
    let h5 = document.createElement('h5');
    h5.textContent = document.querySelector('.mytitle').textContent
    contentdiv.append(h5);
    // create price
    let myprice = document.querySelector(".price-now").textContent;
    let total = "$" + productprice * myValue;
    let span = document.createElement('span');
    span.textContent = myprice + 'x' + myValue
    let ontherspan = document.createElement('span');
    ontherspan.textContent = total;
    ontherspan.classList.add('totalpricee')
    // Append
    contentdiv.append(span);
    contentdiv.append(ontherspan);
    card.append(contentdiv);
    card.append(deleteIcon);
        deleteIcon.addEventListener('click',()=> {
                card.remove()
                itemsNumbers = document.querySelectorAll('.card-menu .cont .holder').length;
                item.textContent = itemsNumbers 
                localStorage.setItem('Cart-Products',itemsNumbers);
        })
    // Values
    document.querySelector('.card-menu .cont').append(card);
    itemsNumbers = document.querySelectorAll('.card-menu .cont .holder').length;
    item.textContent = itemsNumbers 
    localStorage.setItem('Cart-Products',itemsNumbers); 
} 
document.querySelector('.add').addEventListener('click' , addToCart) 
