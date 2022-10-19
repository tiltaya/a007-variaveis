const nome = prompt("Qual o seu nome completo?")
const nascimento = prompt("Qual a sua data de nascimento?")
let endereco = prompt("Qual o seu endereço?")
const cpf = Number(prompt("Qual o seu CPF?"))
let escolaridade = prompt("Qual o seu nível de escolaridade?")
let cnh = prompt("Você possui CNH?")
let filhos = Number(prompt("Você tem quantos filhos?"))
let salario = Number(prompt("Qual o seu cargo atual?"))
let cargo = prompt("Qual o seu salário atual?")
let comissao = prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
const admissao = Number(prompt("Informe seu ano de admissão"))


console.log(typeof nome, typeof nascimento, typeof endereco, typeof cpf, typeof escolaridade,
    typeof cnh, typeof filhos, typeof cargo, typeof comissao, typeof admissao)
console.log("Nome:", nome , "Data de nascimento:", nascimento, "Endereço:", endereco, "CPF:", cpf, 
"Escolaridade:", escolaridade, "CNH:", cnh, "Filhos:", filhos, "Cargo:", cargo, "Comissão:", comissao, 
"Admissão:", admissao)