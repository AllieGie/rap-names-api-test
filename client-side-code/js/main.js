document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rapper-names-api-test.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birthplace').innerText= data.birthLocation
    }catch(error){
        console.log(error)
    }
}