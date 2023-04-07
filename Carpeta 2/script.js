console.log('hola desde archivo js')

const titulo=document.getElementById('titulo')
const boton=document.getElementById('boton')


boton.onclick=()=>{
    titulo.textContent="Hiciste click"
}   