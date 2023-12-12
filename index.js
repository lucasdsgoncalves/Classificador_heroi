//variaveis
let nomeHeroi = "Itachi"
let xp = 8000
let nivel

//condições
if(xp <= 1000) {
    nivel = "Ferro"
    
}else if(xp >= 1001 && xp <= 2000) {
	nivel = "Bronze"

}else if(xp >= 2001 && xp <= 5000) {
	nivel = "Prata"

//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//O intervalo entre 5000 e 6000 não estava definido, por isso deixei definido como "ouro"
}else if(xp >= 5001 && xp <= 7000) {
	nivel = "Ouro"

}else if(xp >= 7001 && xp <= 8000) {
	nivel = "Platina"
	
}else if(xp >= 8001 && xp <= 9000) {
	nivel = "Ascendente"

}else if(xp >= 9001 && xp <= 10000) {
	nivel = "Imortal"

}else if(xp >= 10001){
	nivel = "Radiante"

}

//Apresentando o resultado
console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivel + "!")

// tentando fazer commit
