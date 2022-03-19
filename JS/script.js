let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'

} else {

    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
}



}
function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')

if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
}else{
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    
}
}
function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.lenght >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.backgroundColor = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
    }
}