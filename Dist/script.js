const createTable = document.querySelector('.add-table')
let inputTable = document.querySelector('#input-table-text')
const msg = document.querySelector('.message')
const tableContainer = document.querySelector('.table-sub-container')
let tableCount = 0;
const clear = document.querySelector('.clear');

const closeTable = (element) => {
    console.log('id is ',element.target.id);
    document.getElementById(`table-${ element.target.id }`).style.display = 'none'
}

inputTable.addEventListener('keydown', (e) => {
    console.log(inputTable.innerHTML);
    if (e.key == '+' || e.key == '-' || e.key == '/' || e.key == '*' || e.key == '~' || e.key == '!' || e.key == '#' || e.key == '@' || e.key == '$' || e.key == '%' || e.key == '^' || e.key == '&' || e.key == '*' || e.key == '(' || e.key == ')' || e.key == '-' || e.key == '=' || e.key == '' || e.key == '<' || e.key == '>' || e.key == '?' )
     {   
         e.preventDefault();      
    }
});

inputTable.addEventListener('input', (e) => {
    console.log(inputTable.value);
    if (inputTable.value !== '') {
        createTable.disabled = false;
    }
    else {
        createTable.disabled = true
    }
     
});

createTable.addEventListener('click', (e) => {
    tableContainer.style.visibility = 'visible';
    tableCount++;
    const table = document.createElement('div');
    table.classList.add('table');
    table.id = `table-${tableCount}`
    const col1 = document.createElement('div');
    col1.classList.add('col');
    const col2 = document.createElement('div');
    col2.classList.add('col');
    const col3 = document.createElement('div');
    col3.classList.add('col');
    // const close = document.createElement('h2');
    // close.innerHTML = '<i class="fa-solid fa-rectangle-xmark"></i>';
    // close.classList.add('close');
    // close.id = `${tableCount}`;
   
    
    // table.appendChild(close);
//    close.addEventListener('click', closeTable);
    for (let index = 1; index < 11; index++) {
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p1.appendChild(document.createTextNode(`${inputTable.value}`));
        p2.appendChild(document.createTextNode(`${index}`));
        p3.appendChild(document.createTextNode(`${inputTable.value * index}`));  
        col1.appendChild(p1);
        col2.appendChild(p2);
        col3.appendChild(p3);
    }
    
    table.appendChild(col1); 
    table.appendChild(col2);
    table.appendChild(col3);
    tableContainer.appendChild(table)
    clear.style.visibility = 'visible'
    createTable.disabled = true
    inputTable.value = ""
});

clear.addEventListener('click', (e) => {
    
   
    tableContainer.style.transition = 'all .2s linear'
    clear.style.transition = 'all .2s linear'

    clear.style.visibility = 'hidden'
    tableContainer.innerHTML = ''
})