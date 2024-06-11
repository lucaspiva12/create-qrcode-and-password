//extract method
async function permittedCharacters(){
    let permitted = [];


    if (process.env.UPPERCASE_LETTERS === "true") {
        permitted.push( ... "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ) //os 3 pontos serve para adicionar oque esta dentro e nao substituir
    }
    if (process.env.LOWERCASE_LATTERS === "true") {
        permitted.push( ... "abcdefghijklmnopqrstuvwxyz")
    }
    if (process.env.NUMBERS === "true") {
        permitted.push( ... "0123456789")
    }
    if (process.env.SPECIAL_CHARACTERS == "true") {
        permitted.push( ... "!@#$%^&*()-_")
    }
    return permitted;
}

export default permittedCharacters;