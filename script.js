let banco = [
    { tarefa: 'text1', status: '' },
    { tarefa: 'text2', status: '' },
    { tarefa: 'text3', status: '' },
    { tarefa: 'text4', status: '' },
    { tarefa: 'text5', status: '' },
    { tarefa: 'text6', status: '' }
];

function clickEvent(event) {
    let docClick = event.target;
    console.log(docClick);
    let pos =docClick.getAttribute('data-indice')
    banco[pos].status != 'cheked' ? banco[pos].status = 'checked' : banco[pos].status = '';
}


function tes2() {

    let check = document.getElementById('tarefas');
    check.addEventListener('click',clickEvent);

    /*console.log(check, 'fora')*/
    /*
    for (let i = 0; i < banco.length; i++) {
        console.log(banco[i].status == 'checked', 'prim')
        let check2 = check[i].getAttribute('data-indice')
        console.log(check2)
        /*
        console.log('dentro', check2)
        console.log(banco[check2].status == false,'banco')
        check[i].addEventListener('click', () => {
            banco[check2].status != 'checked' ? banco[check2].status = 'checked' : banco[check2].status = ' ';
            console.log(banco)

        })

    }*/
}



function excloi() {
    let docum = document.getElementsByClassName('button')


    for (let i = 0; i < banco.length; i++) {
        let doc2 = docum[i].getAttribute('data-indice')
        console.log(docum)
        console.log(doc2)
        docum[i].addEventListener('click', () => {
            if (doc2) {
                banco.splice(doc2, 1)
                al();
                return;

            }
            console.log(docum)
            console.log(doc2)

        })

    }

}



function limpaTela() {
    const lista = document.getElementById('tarefas');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}



console.log('aloo')
function al() {
    console.log('aquii')
    limpaTela();
    add(0);

}
function ac() {

}
function comp() {
    console.log('comp')
    limpaTela();
    add(1);

}

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('div');
    item.classList.add('tarefa2');
    item.innerHTML = ('<input  onclick="tes2()"type="checkbox" ' + status + '  data-indice=' + indice + ' id="checkbox2" class="checkbox2"><p >' + tarefa + '</p> <div data-indice=' + indice + ' class="button" onclick="excloi()"></div>');

    document.getElementById('tarefas').appendChild(item);
    const s = document.getElementById('span');
    const cont = banco.length;
    s.innerHTML = (cont);
}

function add(num) {
    if (num == 0) {
        for (let i = 0; i < banco.length; i++) {

            criarItem(banco[i].tarefa, banco[i].status, i)



        }
    }
    if (num == 1) {
        for (let i = 0; i < banco.length; i++) {
            if (banco[i].status == 'checked') {
                criarItem(banco[i].tarefa, banco[i].status, i)
                console.log(banco[i].tarefa)
            }

        }
    }

}



const verificaTecla = (event) => {
    const tecla = event.keyCode;
    const text = event.target.value


    console.log(tecla, text);

    if (tecla == 13) {
        banco.push({ 'tarefa': text, 'status': '' });
        console.log(banco)
        limpaTela();
        add(0);
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


    document.getElementById('iconLuz').addEventListener('click', () => {
        if (troca == 0) {
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
            while (c < banco.length) {

                document.getElementsByClassName('tarefa2')[c].style.background = '#25273C'
                document.querySelectorAll('.tarefa2 > p')[c].style.color = 'white';
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
            while (b < banco.length) {
                document.getElementsByClassName('tarefa2')[b].style.background = 'white'
                document.querySelectorAll('.tarefa2 > p')[b].style.color = '#838383';
                b++;
            }
            troca = 0;
        }
    })
}




