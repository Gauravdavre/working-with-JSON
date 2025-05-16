document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
    .then(Response => Response.json())
    .then(data => {
        const dataDisplay = document.getElementById("dataDisplay");

        const heading = document.createElement('h1');
        heading.textContent = data.squadName;
        dataDisplay.appendChild(heading);

        data.members.forEach(memberss => {
            
        
        const member = document.createElement('h2');
        member.textContent = `Name:${memberss.name}`;

        const age = document.createElement('p')
        age.textContent = `Age:${memberss.age}`;

        const secretIdentity = document.createElement('p')
        secretIdentity.textContent = `Secret Name:${ memberss.secretIdentity}`;

        const powers = document.createElement('p')
        powers.textContent = `Super Powers:${memberss.powers}`;

        dataDisplay.appendChild(member);
        dataDisplay.appendChild(age);
        dataDisplay.appendChild(secretIdentity)
        dataDisplay.appendChild(powers)


    });


    })
    .catch(error => console.error("Error in fetching JSON data:", error));

})