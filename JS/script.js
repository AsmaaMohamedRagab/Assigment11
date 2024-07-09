var signup = document.querySelector(".signup") //sign up anchor
var login = document.querySelector(".login")  //login anchor
var yourname = document.querySelector("#name")
var mail = document.querySelector("#mail")
var password = document.querySelector("#password")
var password1 = document.querySelector("#password1")
var sign = document.querySelector(".sign") //signup paragraph
var log = document.querySelector(".log")   //login paragraph
var signupbtn = document.querySelector(".signupbtn") //signup button
var loginbtn = document.querySelector(".loginbtn")   //login button
var allUsers = []

signup.addEventListener("click", function () {
    yourname.classList.replace("d-none", "d-block")
    password.classList.add("d-none")
    password1.classList.replace("d-none", "d-block")
    sign.classList.add("d-none")
    log.classList.replace("d-none", "d-block")
    loginbtn.classList.add("d-none")
    signupbtn.classList.replace("d-none", "d-block")
})


login.addEventListener("click", function () {
    yourname.classList.replace("d-block", "d-none")
    password.classList.replace("d-none", "d-block")
    password1.classList.replace("d-block", "d-none")
    sign.classList.replace("d-none", "d-block")
    log.classList.replace("d-block", "d-none")
    loginbtn.classList.replace("d-none", "d-block")
    signupbtn.classList.replace("d-block", "d-none")
    document.querySelector(".already").classList.replace("d-block", "d-none")
    document.querySelector(".seccess").classList.replace("d-block", "d-none")
    document.querySelector(".requires").classList.replace("d-block", "d-none")
})

function getValue() {
    var user = {
        name: yourname.value,
        mail: mail.value,
        password: password1.value,
    }
    var exist = false
    if (yourname.value == "" || mail.value == "" || password1.value == "") {
        document.querySelector(".requires").classList.replace("d-none", "d-block")
        document.querySelector(".seccess").classList.replace("d-block", "d-none")
        document.querySelector(".already").classList.replace("d-block", "d-none")
    }
    else if (localStorage.getItem("allusers") == null) {
        allUsers.push(user)
        document.querySelector(".seccess").classList.replace("d-none", "d-block")
        localStorage.setItem("allusers", JSON.stringify(allUsers))
    }
    else if (localStorage.getItem("allusers") != null) {
        allUsers = JSON.parse(localStorage.getItem("allusers"))
        for (var i = 0; i < allUsers.length; i++) {
            if (mail.value == allUsers[i].mail) {
                exist = true
                document.querySelector(".already").classList.replace("d-none", "d-block")
                document.querySelector(".seccess").classList.replace("d-block", "d-none")
                document.querySelector(".requires").classList.replace("d-block", "d-none")
            }
        }
        if (exist == false) {
            allUsers.push(user)
            document.querySelector(".already").classList.replace("d-block", "d-none")
            document.querySelector(".seccess").classList.replace("d-none", "d-block")
            document.querySelector(".requires").classList.replace("d-block", "d-none")
            localStorage.setItem("allusers", JSON.stringify(allUsers))
        }
    }

    cleardata()

}
function cleardata() {
    yourname.value = ""
    mail.value = ""
    password1.value = ""
}


// function welcome() {
//     allUsers = JSON.parse(localStorage.getItem("allusers"))
//     for (var i = 0; i < allUsers.length; i++) {
//         if (mail.value == allUsers[i].mail && password.value == allUsers[i].password) {
//             open("./../welcome.html")
//             document.querySelector(".notexist").classList.replace("d-block", "d-none")
//             document.querySelector(".welcome").innerHTML = `<h1>Welcome</h1>`
//         } else {
//             document.querySelector(".notexist").classList.replace("d-none", "d-block")
//         }


//     }
// }




signupbtn.addEventListener("click", getValue)
// loginbtn.addEventListener("click", welcome)
