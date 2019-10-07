const chores = getChores()

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
        description: ""
    }
    chores.push(chore);
    saveChore(chores)
    renderList(chores, filters)
});


