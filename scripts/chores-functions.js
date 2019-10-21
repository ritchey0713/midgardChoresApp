"use strict"

const getChores = () => {
    const choresJSON = localStorage.getItem("chores")
    try {
        return choresJSON != null ? JSON.parse(choresJSON) : []
    } catch (error) {
        return []
    }
}

// generate chore dom
const generateChores = (chore) => {
    const choreEl = document.createElement("a")
    const textEl = document.createElement("p")
    const status = document.createElement('p')

    choreEl.classList.add("list-item")
    textEl.classList.add("list-item__title")
    status.classList.add("list-item__subtitle")

        if (chore.title.length > 0){
            textEl.textContent = chore.title 
        } else {
            textEl.textContent = "Unnamed Chore"
        }
        
        choreEl.appendChild(textEl)

        choreEl.setAttribute("href", `/edit-chore.html#${chore.id}`)
        status.textContent = updatedStr(chore)
        choreEl.appendChild(status)
        return choreEl;
}

const renderList = (chores, filters) => {
    const choresDiv =  document.querySelector("#chores")
    chores = sortChores(chores, filters.sortBy)
    const filteredList = chores.filter((note)=> note.title.toLowerCase().includes(filters.searchTerm.toLowerCase()));

    choresDiv.innerHTML = ""

    if(filteredList.length > 0){
    filteredList.forEach((chore)=> {
        const choreEl = generateChores(chore)
        choresDiv.appendChild(choreEl)
    })
    } else {
        const paraEl = document.createElement("p")
        paraEl.classList.add("empty-message")
        paraEl.textContent = "Please add a chore to get started!"
        choresDiv.appendChild(paraEl)
    }

};

const saveChore = (chores) => localStorage.setItem("chores", JSON.stringify(chores))


const removeChore = (id) => {
    const choreIndex = chores.findIndex((chore) => chore.id === id);

    if(choreIndex > -1 ){
        chores.splice(choreIndex, 1)
    }
}

const updatedStr = (chore) => {
    return `${moment(chore.updatedAt).fromNow()}`
    } 

const sortChores = (chores, filter) => {
    if(filter === "byEdited"){
        return chores.sort((choreA, choreB) => {
            if (choreA.updatedAt > choreB.updatedAt) {
                return -1
            } else if (choreA.updatedAt < choreB.updatedAt) {
                return 1
            }else {
                return 0
            } 
            
        });
    } else if (filter === "byCreated") {
        return chores.sort((choreA, choreB) => {
            if (choreA.createdAt > choreB.createdAt) {
                return -1
            } else if (choreA.createdAt < choreB.createdAt) {
                return 1
            } else {
                return 0 
            }
        })
    } else if (filter === "alphabetical") {
        return chores.sort((choreA, choreB) => {
            if(choreA.title.toLowerCase() < choreB.title.toLowerCase()) {
                return -1
            } else if (choreA.title.toLowerCase() > choreB.title.toLowerCase()) {
                return 1
            }else {
                return 0
            }
        })
    } 
    else {
        return chores
    }
}

