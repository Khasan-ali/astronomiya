let deta = [
    {
        id: 1,
        title: 'Olmaning rangi qanaqa?',
        result: ['yashil', 'qora', 'kok']
    },
    {
        id: 2,
        title: 'Feruzaning shakli qanaqa?',
        result: ['Dumalog', 'Yumalog', 'Domboq']
    },
]

let elList = document.querySelector('.list')

function render(array) {
    array.map(row => {
        let elItem = document.createElement('li')
        let elQuest = document.createElement('p')
        
        elQuest.textContent = row.title
        elQuest.setAttribute('class', 'inner-text')

        elItem.setAttribute('class', 'item')
        
        elList.appendChild(elItem)
        elItem.appendChild(elQuest)
        
        row.result.map((item, index) => {
            let newList = document.createElement('ul')
            let newItem = document.createElement('li')

            newList.setAttribute('class', 'inner-list')
            
            newItem.textContent = item
            
            newItem.setAttribute('class', 'itemss')

            newItem.addEventListener('click', () => {
                if(row.id == 1 && index === 0) {
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 2 && index === 1){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else {
                    newItem.style.color = 'red'
                }

            })

            elItem.appendChild(newList)
            newList.appendChild(newItem)
        })
    })
}

render(deta)