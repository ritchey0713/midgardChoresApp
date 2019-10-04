let chores = []

const filters = {
    searchTerm: ""
}

const choresJSON = localStorage.getItem("chores")

if (choresJSON != null) {
    chores = JSON.parse(choresJSON)
}

const renderList = (chores, filters) => {
    const filteredList = chores.filter((note)=> {
        return note.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    })
    document.querySelector("#chores").innerHTML = ""
    filteredList.forEach((chore)=> {
        const choreEl = document.createElement("p")
        if (chore.title.length > 0){
            choreEl.textContent = chore.title 
        } else {
            choreEl.textContent = "Unnamed Chore"
        }
        document.querySelector("#chores").appendChild(choreEl)
    })

};

renderList(chores, filters)

document.querySelector('#remove-all').addEventListener('click', () => {
    document.querySelectorAll(".chore").forEach((chore)=> {
        chore.remove()
    })
})

document.querySelector("#search-term").addEventListener('input', (e) => {
    filters.searchTerm = e.target.value
    renderList(chores, filters)
})

// document.querySelector('#chore-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.newChore.value)
//     e.target.elements.newChore.value = ""
// });

document.querySelector("#filter-by").addEventListener('change', (e) => {
    console.log(e.target.value)
})

document.querySelector("#create-chore").addEventListener("click", (e) => {
    const chore = {
        title: "",
        description: ""
    }
    chores.push(chore);
    localStorage.setItem("chores", JSON.stringify(chores))
    renderList(chores, filters)
})


