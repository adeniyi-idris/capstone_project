document.getElementById("profileForm")?.addEventListener('submit', function(e){
    e.preventDefault()
    const firstName = doucmnet.getElementById('fname').value
    const lastName = doucmnet.getElementById('lname').value
    const email = doucmnet.getElementById('email').value
    const phoneNumber = doucmnet.getElementById('number').value
    const gender = doucmnet.getElementById('gender').value
    const address = doucmnet.getElementById('address').value
    const bio = doucmnet.getElementById('bio').value
    const image = doucmnet.getElementById('iu').value

    const username = sessionStorage.getItem('username')
    if (username){
        let users = JSON.parse(localStorage.getItem('users')) || []
        let user = users.find(user => user.username === username)

        if(user){
            user.info = {firstName, lastName, email, phoneNumber, gender, address, bio, image}
            localStorage.setItem('users', JSON.stringify('users'))
            alert('Saved Succesfully')
            window.location.href='../Dashboard/index.html'
        }
    }
})