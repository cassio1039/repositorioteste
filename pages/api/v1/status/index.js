function status(request, response){
  response.status(200).json({ chave: "Criando minha primeira api! " + 
    "Agora irei usar acentuação o charset"
});
}

export default status;