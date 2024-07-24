const signUpDirc = document.getElementById("sign-up-dirc")
const loginDirc = document.getElementById("login-dirc")
const loginPage = document.getElementById("login-page")
const signUpPage = document.getElementById("sign-up-page")



function displaySign(){
    loginPage.style.display = "none"
    signUpPage.style.display = "block"
}

function displayLog(){
    loginPage.style.display = "block"
    signUpPage.style.display = "none"
}

signUpDirc.addEventListener("click", displaySign)
loginDirc.addEventListener("click", displayLog)


const users = JSON.parse(localStorage.getItem('users')) || [
    {
        username: 'idris',
        password: '12345'
    },
    {
        username: 'prosper',
        password: '67890'
    },
    {
        username: 'tide',
        password: '11223'
    },
    {
        username: 'funmi',
        password: '44556'
    }
]


const error = document.getElementById("error")
const submit = document.getElementById("submit")
submit.addEventListener('click', userInfo)

function userInfo(e){
    e.preventDefault()
    const username = document.getElementById("username").value
    const userPass =document.getElementById("password").value
    const user = users.find(user => user.username === username && user.password === userPass )
        if(user){
            
            /*sessionStorage.setItem('loggedIn', 'true')*/ 
            window.location.href = "../profile-page/index.html"
        }else{
            error.style.display = "block"
        }    

}
/*
if(sessionStorage.getItem('loggedIn') === 'true'){
    window.location.href = "../profile-page/index.html"
}*/

const NewUser = document.getElementById('newUsername').value
const NewPass = document.getElementById('passwords').value
const warning = document.getElementById('warning')
const NewSubmit  = document.getElementById('newSubmit')

function signup(){
    const exist = users.find(user => user.username === NewUser)

    if(exist){
        warning.textContent = 'Existing User'
    }else{
        users.push({username: NewUser, password: NewPass})
        localStorage.setItem('users', JSON.stringify(users))

        window.location.href = "../profile-page/index.html"
    }

        

        

}

NewSubmit.addEventListener('click', signup)