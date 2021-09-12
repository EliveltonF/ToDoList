let banco = [
    { tarefa: 'text1', estado: '' },
    { tarefa: 'text2', estado: '' },
    { tarefa: 'text3', estado: '' },
    { tarefa: 'text4', estado: '' },
    { tarefa: 'text5', estado: '' },
    { tarefa: 'text6', estado: '' }
];
let troca = 0
function trocaImg() {
   const tarefa2 = document.getElementsByClassName('tarefa2');
   const tarefas = document.getElementById('tarefas');
   const newTarefa = document.getElementById('newTarefa');
   const input = document.getElementById('texto')
   const imagem = document.getElementById('iconLuz') 
    document.getElementById('iconLuz').addEventListener('click',() => {
        if(troca == 0) {
           document.body.style.backgroundImage = "images/bg-desktop-dark.jpg";
           imagem.innerHTML = ('<img src="images/icon-sun.svg">');
            newTarefa.style.background = '#25273C';
            input.style.background = '#25273C';
            tarefas.style.background = '#25273C';
            tarefa2.style.backgroundColor = '#25273C';


            troca = 1;
        }
        else {
            document.body.style.backgroundImage = "images/bg-desktop-light.jpg";
            imagem.innerHTML = ('<img src="images/icon-moon.svg">');
            newTarefa.style.background = 'white';
            troca = 0;
        }
    })
}



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
