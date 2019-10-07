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
    const choreEl = document.createElement("div")
    const textEl = document.createElement("span")
    const deleteButton = document.createElement("button")
    
    deleteButton.textContent = "X"
    deleteButton.addEventListener('click', (e) => {
        removeChore(chore.id)
        saveChore(chores)
        renderList(chores, filters)
    })

        if (chore.title.length > 0){
            textEl.textContent = chore.title 
        } else {
            textEl.textContent = "Unnamed Chore"
        }

        choreEl.appendChild(deleteButton)
        choreEl.appendChild(textEl)
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

const removeChore = (id) => {
    const choreIndex = chores.findIndex((chore) => {
        return chore.id === id
    });

    if(choreIndex > -1 ){
        chores.splice(choreIndex, 1)
    }
}

