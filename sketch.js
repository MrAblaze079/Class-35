var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    database.ref('ball/position').set({
        x: position.x + x,
        y: position.y + y
    });

    
}

function readPosition(data){

    position = data.val();
  
    ball.x = position.x;
    ball.y = position.y;
 
}


//.ref() - to refer to the location of the database value we care about.
//.on() - a listener function which keeps listening/ reading to the changes in the database
//.set() - is used to set/write/update the value in the database





