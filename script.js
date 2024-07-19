const countValue = document.querySelector("#value");

// increase the number
const increment = () => {
    // get the value from UI
    let value = parseInt (countValue.innerText);
    // value incremented
    value += 1;
    // value added to UI
    countValue.innerText = value;
}

// decrease the number
const decrement = () => {
    // get the value from UI
    let value = parseInt (countValue.innerText);
    // value incremented
    value -= 1;
    // value added to UI
    countValue.innerText = value;
}