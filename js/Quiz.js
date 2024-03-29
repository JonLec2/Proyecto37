class Quiz {
  constructor(){
this.title= createElement('h1')

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
question.hide();
    //escribe aquí el código para cambiar el color de fondo 
background(100, 255, 255)

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    this.title.html("Respuestas del cuestionario")
    this.title.position(300, 0)

    //llama aquí a getContestantInfo( )
Contestant.getContestantInfo();
    //escribe la condición para comprobar si contestantInfor no está indefinido 
if(allContestants !==undefined){
  fill("Blue");
  textSize(16);
  text("*Nota: el concursante que respondio correctamente está resaltado en color verde", 130, 230)
    //escribe aquí el código para agregar una nota
var displayposition=270
    //escribe el código para resaltar al concursante que respondió correctamente
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer)
        fill(0,210, 0)
        
        else
        fill("red")

displayposition +=20;
        textSize(18);
        text(allContestants[plr].name + ":" + allContestants[plr].answer, 130,displayposition )
      
    }
}



  }

}
