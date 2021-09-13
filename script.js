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
    const tecla = event.keyCode;
    const text = event.target.value
  
    
    console.log(tecla, text);

    if (tecla == 13) {
        banco.push({'tarefa':text,'estado':''});
        console.log(banco)
        add();
        event.preventDefault();
    }

}

function pegaTecla() {
    document.addEventListener('keydown', verificaTecla);

}

let troca = 0
function trocaImg() {
   const tarefas = document.getElementById('tarefas');
   const newTarefa = document.getElementById('newTarefa');
   const input = document.getElementById('texto');
   const imagem = document.getElementById('iconLuz');
   const parteBaixo = document.getElementById('parteBaixo');
   const left = document.getElementById('left');
   const all = document.getElementById('all');
   const active = document.getElementById('active');
   const continued = document.getElementById('completed');
   const limpaCompleto = document.getElementById('limpaCompleto');


    document.getElementById('iconLuz').addEventListener('click',() => {
        if(troca == 0) {
            document.body.style.background = '#25273C url("images/bg-desktop-dark.jpg") no-repeat'
            imagem.innerHTML = ('<img src="images/icon-sun.svg">');
            newTarefa.style.background = '#25273C';
            input.style.background = '#25273C';
            input.style.color = 'white'
            tarefas.style.background = '#25273C';
            parteBaixo.style.background = '#25273C';
            left.style.color = 'white';
            all.style.color = 'white';
            active.style.color = 'white';
            continued.style.color = 'white';
            limpaCompleto.style.color = 'white';
            let c = 0;
            while(c < banco.length) {

                document.getElementsByClassName('tarefa2')[c].style.background = '#25273C'
                document.querySelectorAll('.tarefa2 > p')[c].style.color= 'white';
                c++;
            }
            troca = 1;
        }
        else {
            document.body.style.background = 'white url("images/bg-desktop-light.jpg") no-repeat'
            imagem.innerHTML = ('<img src="images/icon-moon.svg">');
            newTarefa.style.background = 'white';
            input.style.background = 'white';
            input.style.color = '#838383'
            tarefas.style.background = 'white';
            parteBaixo.style.background = 'white';
            left.style.color = '#838383';
            all.style.color = '#838383';
            active.style.color = '#838383';
            continued.style.color = '#838383';
            limpaCompleto.style.color = '#838383';
            let b = 0;
            while(b < banco.length) {
                document.getElementsByClassName('tarefa2')[b].style.background = 'white'
                document.querySelectorAll('.tarefa2 > p')[b].style.color= '#838383';
                b++;
            }
            troca = 0;
        }
    })
}


//tira ação do enter 
document.querySelectorAll