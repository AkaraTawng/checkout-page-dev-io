const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const quantity = document.querySelector("#quantity");

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