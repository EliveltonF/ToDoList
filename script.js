let banco = [
    { tarefa: 'text1', estado: '' },
    { tarefa: 'text2', estado: '' },
    { tarefa: 'text3', estado: '' },
    { tarefa: 'text4', estado: '' },
    { tarefa: 'text5', estado: '' },
    { tarefa: 'text6', estado: '' }
];


const criarItem = (tarefa) => {
    const item = document.createElement('div');
    item.classList.add('tarefa2');
    item.innerHTML = ('<input type="checkbox" class="checkbox2"><p>' + tarefa + '</p> <div class="button">X</div>');

    document.getElementById('tarefas').appendChild(item);
    const s = document.getElementById('span');
    const cont = banco.length;
    s.innerHTML = (cont);
}

function add() {
    for (let i = 0; i < banco.length; i++) {
        console.log(banco[i].tarefa)
        if (banco[i].estado != 'ok') {
            criarItem(banco[i].tarefa)
            banco[i].estado = 'ok';
        }

    }
}


const verificaTecla = (event) => {
    const tecla = event.key;
    const text = event.target.value
    
    console.log(tecla, text);
    if (tecla == 'a') {
        banco.push({'tarefa':text,'estado':''});
    console.log(banco)
        add();
    }

}

function pegaTecla() {
    document.addEventListener('keydown', verificaTecla);

}
