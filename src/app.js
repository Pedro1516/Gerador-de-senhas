const tela = document.querySelector('#exibir-senha')
const btn = document.querySelector('#gerar')
const tamanho = document.querySelector('#tamanho')
const tipo = document.querySelectorAll('.tipo')
const fieldset = document.querySelector('.selecao-tipo')
const label = document.querySelector('.num')


function gerarSenha(tamanho){
 tamanho = tamanho || 1
 let senha = ''
 let carcTemp = ''

	const nums = ['1', '2', '3','4', '5','6','7','8','9','0']
	const especiais = ['*', ' ', '&', '_', '-', '#', '•', '(', ')', '%', '$', '"', '<', '>', ']', '[', '{', '}', '°', '|', '/', '*', '+', '?', '!', '@']
	const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	const tiposCarc = []
	
	if(tipo[0].checked){
    tiposCarc.push(especiais)
  }
  if(tipo[1].checked){
    tiposCarc.push(nums)
  }
  if(tipo[2].checked){
    tiposCarc.push(letras)
  }
	
	for(let i = 0; i < tamanho; i++){
		let tipoRandom = Math.floor(Math.random() * tiposCarc.length)
    let indexC = Math.floor(Math.random() * tiposCarc[tipoRandom].length)
		
		let m =  Math.floor(Math.random() * 2)
		
		if(m > 0){
			caracTemp = tiposCarc[tipoRandom][indexC].toUpperCase()
		}
		else{
			caracTemp = tiposCarc[tipoRandom][indexC].toLowerCase()
		}
   senha += caracTemp
	}
	return senha
}

function testeCheckbox(){
  let estado = false
  for(let i = 0; i < tipo.length; i++){
    if(tipo[i].checked){
      estado = true
    }
  }
  return estado
}

btn.addEventListener("click", () => {
  if(tamanho.validity.valid  && testeCheckbox()){
    tela.innerText = gerarSenha(Number(tamanho.value))
  }
})

fieldset.addEventListener("input", () => {
  if(testeCheckbox()){
    fieldset.classList.remove('invalido')
  }
  else{
    fieldset.classList.add('invalido')
}
})

tamanho.addEventListener("change", () => {
  if(!tamanho.validity.valid || tamanho == ''){
   label.classList.add('invalido')
   tamanho.classList.add('invalido')
  }
  else{
   label.classList.remove('invalido')
   tamanho.classList.remove('invalido')
  }
})

//label.dataset.opacity = 0
