console.log("script.js")

const cubismToken = "Cubism Editor Web Plugin Token"

function writeLocalStorage() {
    let data = "Write Local Storage. " + Date.now().toString()
    localStorage.setItem(cubismToken, data)
}

function checkLocalStorage() {
    let data = localStorage.getItem(cubismToken)
    document.getElementById("localStorage").textContent = data
}
