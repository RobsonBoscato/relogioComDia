function carregar() {
  diaSemana = new Array("Domingo", "Segunda-feira", "Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")
  var msg = window.document.getElementById('msg')
  var picture = window.document.getElementById('imagem')
  var data = new Date().toLocaleTimeString()
  var dia = new Date().toLocaleDateString() 
  var semana = new Date()
  var hora = semana.getHours()
  msg.innerHTML = ` Hoje é ${dia} - ${diaSemana[semana.getDay()]}<br> Horário atual é <strong>${data} </strong>`

  if (hora >= 5 && hora < 12) {
    picture.src = "imagens/fotomanha.png"
    document.body.style.background = '#f1fabde3'
    document.body.style.color = 'black'
    
  }else if (hora >= 12 && hora < 18) {
    picture.src = "imagens/tarde.png"
    document.body.style.background = '#d69c45b2'
    
  }else if (hora >= 18 && hora < 23) {
    picture.src ="imagens/noite.png"
    document.body.style.background = '#111f38e0'
        
  }else {
    picture.src ="imagens/madruga.jpg"
    document.body.style.background = '#020407e0'
    document.body.style.borderRadius = '200px'
  }
}
