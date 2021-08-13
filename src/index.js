import './styles/style.scss'

const inputText = document.getElementById('inputText')
const inputSubmit = document.getElementById('inputSubmit')
const mainTasksBox = document.getElementById('mainTasksBox')
let counter = 1


inputSubmit.addEventListener('click', () => {
    const text = inputText.value
    const newTask = document.createElement('div')
    newTask.className = 'main__tasks-input'
    newTask.innerHTML = `
        <input type="checkbox" name="task_${counter}">
        <label for="task_${counter}" id="task_${counter}">${text}</label>
    `
    mainTasksBox.appendChild(newTask)
    counter++
})

mainTasksBox.addEventListener('click', (event) => {
    let divTarget = event.target
    console.log('divTarget: ', divTarget);
    if(divTarget.nodeName === 'INPUT'){
        console.log('divTarget: ', divTarget);
        const inputName = divTarget.name
        const label = document.getElementById(`${inputName}`)
        console.log('label: ', label);
        const checked = divTarget.checked
        // console.log('checked: ', checked);
        if (checked){
            label.style.color = 'green'
            label.style.textDecoration = 'line-through'
        }else{
            label.style.color = 'red'
            label.style.textDecoration = 'none'
        }
    }
})



// console.log('hi')