let users = JSON.parse(localStorage.getItem('users')) || [];
const registerUser = () => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let obj = {
        userid: Math.floor(Math.random() * 1000000),
        name: name,
        email: email,
        password: password
    }
    let newdata = [...users, obj]
    localStorage.setItem('users', JSON.stringify(newdata))
    alert("user register")
    window.location.href = './index.html';
}

const loginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let checkUser = users.find((val, index) => {
        return val.email === email && val.password === password
    })

    if (checkUser) {
        alert("User successfully login");
        localStorage.setItem('checkUserLogin', JSON.stringify(checkUser))
        window.location.href = './product.html';
    } else {
        alert("Invalid email or password");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
}