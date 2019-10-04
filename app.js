const chores = [
    {
        title: "buy food",
        body: "body 1"
    },
    {
        title: "Pay bills",
        body: "body 2"
    },
    {
        title: "Code some shit",
        body: "body 2"
    }
]

const filters = {
    searchTerm: ""
}

const renderList = (chores, filters) => {
    const filteredList = chores.filter((note)=> {
        return note.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    })
    document.querySelector("#chores").innerHTML = ""
    filteredList.forEach((chore)=> {
        const choreEl = document.createElement("p")
        choreEl.textContent = chore.title 
        document.querySelector("#chores").appendChild(choreEl)
    })

};

renderList(chores, filters)

document.querySelector('#remove-all').addEventListener('click', () => {
    document.querySelectorAll(".note").forEach((chore)=> {
        chore.remove()
    })
})

document.querySelector('#create-chore').addEventListener('click', (e) => {
    
})

document.querySelector("#search-term").addEventListener('input', (e) => {
    filters.searchTerm = e.target.value
    renderList(chores, filters)
})


