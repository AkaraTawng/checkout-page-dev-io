// const decrementBtn = document.querySelector("#decrement");
// const incrementBtn = document.querySelector("#increment");
// const quantity = document.querySelector("#quantity");

const basket = document.querySelector("#basket");

const renderBasket = () => {
     basket.innerHTML = '';
    products.forEach(product => {
        basket.innerHTML += `
        <div class="basket-item-outer-container">
        <img src=${product.imgSrc} alt=${product.name}>
            <div class="basket-item-inner-container">
                <div class="basket-item-info">
                    <h2>${product.name}</h2>
                    <p>$${product.discountPrice} <span>$${product.oldPrice}</span></p>
                </div>
                <div id="basket-item-quantity">
                    <button onclick="changeQuantity('minus', ${product.id})" id="decrement">-</button>
                    <h2 id="quantity">${product.quantity}</h2>
                    <button onclick="changeQuantity('plus', ${product.id})" id="increment">+</button>
                </div>
            </div>
        </div>
        `;
    })
}

renderBasket();

const changeQuantity = (action, id) => {
    products.map(product => {
        if(product.id === id){
            if(product.quantity > 0 && action === 'minus'){
                product.quantity-=1;
            }
            else if(action === 'plus'){
                product.quantity+=1;
            }
            renderBasket();
            return {...product, quantity: product.quantity};
        };
    });
};


// let counter = 0;
// quantity.innerText=counter;

// const decrement = () => {
//     if(counter > 0){
//           counter--;
//     quantity.innerText=counter;
//     }
//     return counter;
// }

// const increment = () => {
//     counter++;
//     quantity.innerText=counter;
// }

/* add delete item function. if item is 0, remove from basket. */
/* add products js file as database for products */ 