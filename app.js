const notes = [
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

const generateobjList = (notes) => {
    notes.forEach((note) => {
        const newPara = document.createElement('p')
        newPara.textContent = note.title
        newPara.className = "note"
        document.body.appendChild(newPara)
    });

};

generateobjList(notes)

document.querySelector('#remove-all').addEventListener('click', () => {
    document.querySelectorAll(".note").forEach((note)=> {
        note.remove()
    })
})

document.querySelector('#create-chore').addEventListener('click', (e) => {
    
})

document.querySelector("#search-term").addEventListener('change', (e) => {
    
})


