var loginbtn = document.querySelector(".loginbtn")   //login button
function getWelcome() {
    allUsers = JSON.parse(localStorage.getItem("allusers"))
    for (var i = 0; i < allUsers.length; i++) {
        if (mail.value == allUsers[i].mail && password.value == allUsers[i].password) {
            open("./../welcome.html")
            document.querySelector(".notexist").classList.replace("d-block", "d-none")
            document.querySelector(".homePage").innerHTML= "<h1>Welcome</h1>"
        } else {
            document.querySelector(".notexist").classList.replace("d-none", "d-block")
        }
    }
}
loginbtn.addEventListener("click", getWelcome)