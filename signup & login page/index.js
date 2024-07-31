const signUpDirc = document.getElementById("sign-up-dirc")
const loginDirc = document.getElementById("login-dirc")
const loginPage = document.getElementById("login-page")
const signUpPage = document.getElementById("signUpPage")



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


let users = JSON.parse(localStorage.getItem('users')) || [
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
            window.location.href = "../Dashboard/index.html"
        }else{
            error.style.display = "block"
        }    

}



function signup(e){
    const username = document.getElementById('newUsername').value
    const password = document.getElementById('passwords').value
    const warning = document.getElementById('warning')
    
    e.preventDefault()
    if(localStorage.getItem(username)){
        warning.textContent = 'Existing User'
    }else{
        users.push({username, password})
        localStorage.setItem('users', JSON.stringify(users))

        //localStorage.setItem(username, password)

        window.location.href = "../signup & login page/index.html"
    } 

}

signUpPage.addEventListener('submit', signup)


        
