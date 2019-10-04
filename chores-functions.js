const getChores = () => {
    const choresJSON = localStorage.getItem("chores")

    if (choresJSON != null) {
        return JSON.parse(choresJSON)
    } else {
        return []
    }

}

// generate chore dom
const generateChores = (chore) => {
    
    const choreEl = document.createElement("p")
    const deleteButton = document.createElement("button")
    
    deleteButton.textContent = "X"

        if (chore.title.length > 0){
            choreEl.textContent = chore.title 
        } else {
            choreEl.textContent = "Unnamed Chore"
        }

        choreEl.appendChild(deleteButton)
        return choreEl;
}

const renderList = (chores, filters) => {
    const filteredList = chores.filter((note)=> {
        return note.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    })
    document.querySelector("#chores").innerHTML = ""
    filteredList.forEach((chore)=> {
        const choreEl = generateChores(chore)
        document.querySelector("#chores").appendChild(choreEl)
    })

};

const saveChore = (chores) => {
    localStorage.setItem("chores", JSON.stringify(chores))
}

