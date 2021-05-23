// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
   fetch('http://localhost:3000/users', configObj)
            .then(function(response) {
                return response.json('body')})
                .then(function(e){
                    document.body.innerHTML += `<div>\n
                    <p>${e.name}</p>\n
                    <p>${e.email}</p>\n
                    </div>`
                })
                 .catch(function(error){
                     document.body.innerHTML += document.querySelector('message')
                     console.log(error)
                 })
             
            
}
submitData(name,email)