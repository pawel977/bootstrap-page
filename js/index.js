//getters
const product = document.querySelector('#counter');
const buyButton = document.querySelector(`#buyButton`);
const form = document.querySelector(`#form`);


//values

let countProduct = product.innerHTML;


form.onsubmit = (e) => {
    e.preventDefault()
    if (countProduct > 0) {
        countProduct--;
        product.innerHTML = countProduct;
        alert(countProduct);
    }else{
        alert(`brak produktu`);
    }
};