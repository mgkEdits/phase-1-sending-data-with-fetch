// Add your code here

function submitData (name, email) {
    const newUser={
        name: name,
        email: email
    };

    
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: { 
                'content-Type': 'application/json',
                'Accept': 'application/json'
        },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            let userID = data.id;
            const userIdContainer = document.createElement("p");
            userIdContainer.textContent = `New User ID: ${userID}`;
            document.body.appendChild(userIdContainer);
        })

        
    .catch ((error) => {
        appendErrorMessageToDOM(error.message);
    })
}

 // Function to append the error message to the DOM
 function appendErrorMessageToDOM(errorMessage) {
    const errorContainer = document.createElement("p");
    errorContainer.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorContainer);
  }

