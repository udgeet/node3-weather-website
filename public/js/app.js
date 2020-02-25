// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = ''
    messageTwo.textContent = 'Loading . . . '
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
                    // console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = JSON.stringify(data.forecast)
                    // console.log(data)
            }

        })
    })
})