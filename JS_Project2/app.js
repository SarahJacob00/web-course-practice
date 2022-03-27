let data = [
    {
        name:'Sarah',
        age:'22'
    },
    {
        name:'Aar',
        age:'22'
    },
    {
        name:'Rue',
        age:'22'
    },
    {
        name:'Bob',
        age:'22'
    },
]

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>'+ item.name + '</div>';
})

info.innerHTML = details.join('\n');