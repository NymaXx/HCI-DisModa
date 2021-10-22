import Game from "./Game";

class BallSort {

    constructor(actividad){
        this.actividad = actividad;
    }

    setup(){

    }

    draw(app) {
        app.background(0)
        app.ellipse(100, 100, 200, 200)
        app.text("Instrucciones de ballsort", 100, 100)
    }

    mousePressed(){
        this.actividad.next();
    }

}

export default BallSort;