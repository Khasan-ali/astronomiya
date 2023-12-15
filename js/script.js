let deta = [
    {
        id: 1,
        title: "... - radiusi ixtiyoriy tanlab olingan va markazi kuzatuvchining ko'zida yotgan sfera. Nuqralar o'rnini to'ldiring.",
        result: ['Galaktika', 'Osmon sferasi', 'Yer shari']
    },
    {
        id: 2,
        title: "Kuzuvchining boshi tomoni yo'nalishidagi nuqta?",
        result: ['Nadir', 'Meridian', 'Zinet']
    },
    {
        id: 3,
        title: "Yer shimoliy qutbi davomining osmon sferasi bilan kesishgan nuqtasi - ?",
        result: ['Olamning janubiy qutbi', 'Olamning shimoliy qutbi', 'TJY']
    },
    {
        id: 4,
        title: "Olam qutblari tutashuvchi o'q - ?",
        result: ["Olam o'qi", "Tush chizig'i", 'Meridian']
    },
    {
        id: 5,
        title: "Shimol va Janub nuqtalari tutashtiruvchi tutashtiruvch chiziq kesmasi - ?",
        result: ["Olam o'qi", "Tush chizig'i", 'Meridian']
    },
    {
        id: 6,
        title: "Olam qutblari, zenit va nuqtalaridan o'tuvchi katta aylana nima deyiladi?",
        result: ["Olam o'qi", "Tush chizig'i", 'Meridian']
    },
    {
        id: 7,
        title: "Yerning istalgan joyida ham o'z holatini o'zgartirmaydigan nuqta, chiziq va aylanalarni belgilang?",
        result: ["Tush chizig'i, matematik gorizont", "Osmon sferasi, olam o'qi, matematik gorizont", "Olam qutblari, olam o'queueMicrotask, osmon ekvatori"]
    },
    {
        id: 8,
        title: "Quyidagilardan osmon sferasi nuqtalarini belgilang",
        result: ["zenit, vertikal chiziq, p', osmon meridiani", "zenit, Nadir, p, p', N,S", "Vertikal chiziq, osmon meridiani"]
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
                if(row.id == 1 && index === 1) {
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 2 && index === 2){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 3 && index === 1){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 4 && index === 0){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 5 && index === 1){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 6 && index === 2){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 7 && index === 2){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }else if(row.id == 8 && index === 1){
                    newItem.style.background = 'green'
                    newItem.style.color = 'white'
                }
                else {
                    newItem.style.color = 'red'
                }

            })

            elItem.appendChild(newList)
            newList.appendChild(newItem)
        })
    })
}

render(deta)