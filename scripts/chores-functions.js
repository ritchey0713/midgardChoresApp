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
    const choreEl = document.createElement("div")
    const textEl = document.createElement("a")
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
        
        textEl.setAttribute("href", `/edit-chore.html#${chore.id}`)
        choreEl.appendChild(deleteButton)
        choreEl.appendChild(textEl)
        return choreEl;
}

const renderList = (chores, filters) => {
    chores = sortChores(chores, filters.sortBy)
    const filteredList = chores.filter((note)=> note.title.toLowerCase().includes(filters.searchTerm.toLowerCase()));

    document.querySelector("#chores").innerHTML = ""
    filteredList.forEach((chore)=> {
        const choreEl = generateChores(chore)
        document.querySelector("#chores").appendChild(choreEl)
    })

};

const saveChore = (chores) => localStorage.setItem("chores", JSON.stringify(chores))


const removeChore = (id) => {
    const choreIndex = chores.findIndex((chore) => chore.id === id);

    if(choreIndex > -1 ){
        chores.splice(choreIndex, 1)
    }
}

const updatedStr = (chore) => {
    updatedEl.textContent = `${moment(chore.updatedAt).fromNow()}`
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

