
const planModal = document.getElementById('plan-modal')
const addPlan = document.getElementById('add-plan')
const savePlan = document.getElementById('savePlan')
const closePlan = document.getElementById('closePlan')

addPlan.addEventListener('click', openModal)
closePlan.addEventListener('click', closeModal)


function openModal(){
    planModal.style.display = 'flex'
}

function closeModal(){
    planModal.style.display = 'none'
}






let business = JSON.parse(localStorage.getItem('business')) || []

function saveToLocalStorage(){
    localStorage.setItem('business', JSON.stringify('business'))
    display()
}

savePlan.addEventListener('click', function save(){
    const title = document.getElementById('plan-title').value
    const description = document.getElementById('plan-description').value

    if(title && description){
        business.push({title, description})
        saveToLocalStorage
        alert("saved business")
        display()
    }else{
        alert('InputField EMPTY')
    }

})

function display(){
    const plansContainer = document.getElementById('plans-container')
    plansContainer.innerHTML = " "
    business.forEach(bus => {
        if(bus.title || bus.description ){
        plansContainer.innerHTML += `
        <div>
            <h3>${bus.title}</h3>
            <p>${bus.description}</p>
        </div>`
    }});
}

display()










//plansContainer.appendChild(card)








//save business plan

/*  
let plans = JSON.parse(localStorage.getItem('plans')) || []

function save(){
   

    const titleVal = title.value
    const descriptionVal =  description.value


    const plan = {
        titleVal,
        descriptionVal
    }
    
    plans.push(plan)
    localStorage.setItem('plans', JSON.stringify('plans'))

    displayPlans()
    closeModal()
}

//display business plans
function displayPlans(){
    
    //const plans = JSON.parse(localStorage.getItem('buinessPlans')) || []
     plans.forEach(plan => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <h3>${plan.title}</h3>
        <p>${plan.description}</p>`
        plansContainer.appendChild(card)
     });
}

window.onload = function(){
    displayPlans()
}




*/