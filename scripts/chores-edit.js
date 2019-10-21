"use strict"

const choreId = location.hash.substring(1)
let chores = getChores()
let chore = chores.find((chore) => {
        return chore.id == choreId
    })

const titleEl = document.querySelector("#chore-title")
const updatedEl = document.querySelector("#updated-at")
const bodyEl = document.querySelector("#chore-body")

if (chore == undefined) {
    location.assign("/index.html")
}

titleEl.value = chore.title 
bodyEl.value = chore.body
updatedStr(chore)

titleEl.addEventListener("input", (e) => {
    chore.title = e.target.value 
    chore.updatedAt = moment().valueOf();
    updatedStr(chore)
    saveChore(chores)
})

bodyEl.addEventListener("input", (e) => {
    chore.body = e.target.value
    chore.updatedAt = moment().valueOf();
    updatedStr(chore)
    saveChore(chores)
})

document.querySelector("#remove-chore").addEventListener("click", () => {
    removeChore(chore.id)
    saveChore(chores)
    location.assign("/index.html")
})

//live data change
window.addEventListener("storage", (e) => {
    
    if(e.key === "chores") {
        chores = JSON.parse(e.newValue)
        let chore = chores.find((chore) => {
            return chore.id == choreId
        });

        if (chore == undefined) {
            location.assign("/index.html")
        }

        titleEl.value = chore.title 
        bodyEl.value = chore.body
    }
});