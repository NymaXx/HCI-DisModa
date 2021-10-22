
class Game {

    constructor(actividad){
        this.actividad = actividad;
        this.title = "hello puta";
        this.screen1 = null;
        this.screen2 = null; 
        this.screen3 = null; 
        this.screen4 = null;
        this.screenStart = null;
        this.currentScreen = 0;

    }

    setup(app){
        app.createCanvas(1250,600);
        this.screen1= app.loadImage("./images/exterior.png");
        this.screen2= app.loadImage("./images/tienda.png");
        this.screen3= app.loadImage("./images/start.png");
        this.screen4= app.loadImage("./images/vestier.png");
        
    }

    draw(app) {
        app.background(0);
        

        switch(this.currentScreen){
            case 0 :
            app.image(this.screen3, 0,0, 1250,600);
                break;

            case 1 :
            app.image(this.screen1, 0,0, 1250,600);
                break;
        };

        app.textSize(20);
        app.text(app.mouseX + 'X' + app.mouseY + 'Y', app.mouseX, app.mouseY);
    }

    mousePressed(app){
        switch(this.currentScreen){
            case 0:
                if(app.mouseX > 468 && app.mouseX < 768 && app.mouseY > 437 && app.mouseY < 505){
                    this.currentScreen = 1;
                }
                break;
        }
    }

}

export default Game;