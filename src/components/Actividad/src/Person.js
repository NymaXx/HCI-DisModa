
class Person{
    constructor(code, posX, posY, currentState,currentClothe){
        this.code = code;
        this.posX = posX;
        this.posY = posY;
        this.currentState = currentState;  //si esta vestido o desvestido
        this.currentClothe = currentClothe; //la prenda que tenga encima en ese momento
        this.armario = [];

    }

    paint(app){
        app.fill(255,02,45);
        app.ellipse(50,50,50,50);
    }


}

export default Person;