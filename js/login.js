document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //DANGER: DO NOT VERIFY email password on the client side 
    // varify login
    if (email != "rupa@bank.com") {
        alert("Invalid Email");
        return;
    }
    if (password != "secret") {
        alert("Invalid Password");
        return;
    }

    window.location.href = "bank.html";

});