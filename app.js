const productsContainer = document.querySelector("#products-container");
const basketTotalContainer = document.querySelector("#totals-container");

const renderBasket = () => {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        productsContainer.innerHTML += `
        <div class="basket-item-outer-container">
        <img src=${product.imgSrc} alt=${product.name}>
            <div class="basket-item-inner-container">
                <div class="basket-item-info">
                    <h2>${product.name}</h2>
                    <p>$${product.discountPrice} <span>$${product.oldPrice}</span></p>
                </div>
                <div class="basket-item-quantity">
                    <button onclick="changeQuantity('minus', ${product.id})" id="decrement">&minus;</button>
                    <h2 id="quantity">${product.quantity}</h2>
                    <button onclick="changeQuantity('plus', ${product.id})" id="increment">&plus;</button>
                </div>
            </div>
        </div>
        `;
    });
};
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
            if(product.quantity === 0){
                removeItemFromCart(product.id);
            }
            updateCart();
            return {...product, quantity: product.quantity};
        };
    });
};

const basketTotal = () => {
    let totalPrice = 0, totalShipping = 0;
    
    products.forEach(product => {
       totalPrice += product.discountPrice * product.quantity;
       totalShipping += product.shipping * product.quantity;
    });

    if(totalShipping >= 500){
        basketTotalContainer.innerHTML = `
        <div id="shipping">
            <h2>Shipping</h2>
            <p>Free Shipping! 🥳</p>
        </div>
        <div id="total">
            <h2>Total</h2>
            <p>$${totalPrice.toFixed(2)}</p>
        </div>
        `;
    } else if (totalShipping < 500){
        basketTotalContainer.innerHTML = `
        <div id="shipping">
            <h2>Shipping</h2>
            <p>$${totalShipping}</p>
        </div>
        <div id="total">
            <h2>Total</h2>
            <p>$${totalPrice.toFixed(2)}</p>
        </div>
        `;
    };
};
basketTotal();

const updateCart = () => {
    renderBasket();
    basketTotal();
};

const removeItemFromCart = (id) => {
    products = products.filter(product => product.id !== id);
    updateCart();
};


