const form = document.getElementById('form')
const calculate = document.getElementById('calculate')
const clearBtn = document.getElementById('clearBtn')



calculate.addEventListener('click', function(event) {
    event.preventDefault()

    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value


    var imc = weight / (height * height).toFixed(2)

    var result = imc


    const spanResult = document.getElementById('spanResult').innerHTML = result.toFixed(2)
    console.log(result)

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault()
        form.reset()
    })
})