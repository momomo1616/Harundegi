unction showLogin() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "Harundegi1616..") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('intro-sound').play();
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
}
