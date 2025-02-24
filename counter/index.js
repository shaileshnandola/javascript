
let count = 0;

let btn =
    document.getElementById("dec");
    btn.disabled = true;
const increment = () => {
    count++;
    document.getElementById('count').innerHTML = count;
    if (count > 0) {
        document.getElementById("count").innerHTML = count;
        btn.disabled = false;
    }
}
const decrement = () => {
    count--;
    document.getElementById('count').innerHTML = count;
    if (count == 0) {
        document.getElementById("count").innerHTML = count;
        btn.disabled = true;
    }
}

