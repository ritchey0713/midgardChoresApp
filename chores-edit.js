const choreId = location.hash.substring(1)
const chores = getChores()
const chore = chores.find((chore) => {
        return chore.id == choreId
    })

const titleEl = document.querySelector("#chore-title")
const bodyEl = document.querySelector("#chore-body")

titleEl.value = chore.title 
bodyEl.value = chore.body


if (chore == undefined) {
    location.assign("/index.html")
}



titleEl.addEventListener("input", (e) => {
    chore.title = e.target.value 
    saveChore(chores)
})

bodyEl.addEventListener("input", (e) => {
    chore.body = e.target.value 
    saveChore(chores)
})

document.querySelector("#remove-chore").addEventListener("click", () => {
    removeChore(chore.id)
    saveChore(chores)
    location.assign("/index.html")
})