const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const quantity = document.querySelector("#quantity");

let counter = 5;
quantity.innerText=counter;

const decrement = () => {
    if(counter > 0){
          counter--;
    quantity.innerText=counter;
    }
    return counter;
}
