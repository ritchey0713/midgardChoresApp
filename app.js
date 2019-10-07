let chores = getChores()

const filters = {
    searchTerm: ""
}

renderList(chores, filters)

document.querySelector('#remove-all').addEventListener('click', () => {
    document.querySelectorAll(".chore").forEach((chore)=> {
        chore.remove()
    })
});

document.querySelector("#search-term").addEventListener('input', (e) => {
    filters.searchTerm = e.target.value
    renderList(chores, filters)
});

// document.querySelector('#chore-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.newChore.value)
//     e.target.elements.newChore.value = ""
// });

document.querySelector("#filter-by").addEventListener('change', (e) => {
    console.log(e.target.value)
});

document.querySelector("#create-chore").addEventListener("click", (e) => {
    const chore = {
        id: uuidv4(),
        title: "",
        body: ""
    }
    chores.push(chore);
    saveChore(chores)
    // renderList(chores, filters)
    location.assign(`/edit-chore.html#${chore.id}`)
});

window.addEventListener("storage", (e) => {
    // debugger;
    if (e.key === "chores") {
        chores = JSON.parse(e.newValue)
        renderList(chores, filters)
    }
})
