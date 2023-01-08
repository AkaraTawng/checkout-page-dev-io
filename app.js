const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const quantity = document.querySelector("#quantity");

const basket = document.querySelector("#basket");

const renderBasket = () => {
    products.forEach(product => {
        basket.innerHTML += `
        <div class="basket-item-outer-container">
        <img src="./img/bag.png" alt="backpack">
            <div class="basket-item-inner-container">
                <div class="basket-item-info">
                    <h2>Vintage Backpack</h2>
                    <p>$54.99 <span>$94.99</span></p>
                </div>
                <div id="basket-item-quantity">
                    <button id="decrement">-</button>
                    <h2 id="quantity"></h2>
                    <button id="increment">+</button>
                </div>
            </div>
    </div>
        `
    })
}

renderBasket();


let counter = 0;
quantity.innerText=counter;

const decrement = () => {
    if(counter > 0){
          counter--;
    quantity.innerText=counter;
    }
    return counter;
}

const increment = () => {
    counter++;
    quantity.innerText=counter;
}

/* add delete item function. if item is 0, remove from basket. */
/* add products js file as database for products */ 