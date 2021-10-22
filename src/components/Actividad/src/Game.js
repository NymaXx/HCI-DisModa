import Person from "./Person";

class Game {

    constructor(actividad){
        this.actividad = actividad;
        this.screen1 = null;
        this.screen2 = null; 
        this.screen3 = null; 
        this.screen4 = null;
        this.currentScreen = 1;
        this.npc = null;
        this.person,this.inicial1;

    }

    setup(app){
        app.createCanvas(1250,600);
        this.currentText = "Bienvenido/a d'Moda Boutique, ¡gracias por ser nuestro/a nuevo/a asesor/a!.\nDía a día llegan muchos clientes, ayúdalos a elegir su outfit ideal,\ndebes prestar atención a sus requerimientos y peticiones. Para elegir la ropa ideal  solo debes dar clic sobre ella...";
        this.btnPosY = 514;

        //loadImages
        this.screen1= app.loadImage("./images/exterior.png");
        this.screen2= app.loadImage("./images/tienda.png");
        this.screen3= app.loadImage("./images/start.png");
        this.screen4= app.loadImage("./images/vestier.png");
        this.npc= app.loadImage("./images/NPC.png");
        this.nextButton = app.loadImage("./images/button.png");

        this.inicial1 = app.loadImage("./1inicial.png");

        //queria poner todas las imagenes de cada personaje en un arreglo cada una y asi para cuando se mostrara su situacion
        //solo se accediera a la ropa e imagenes de ese personaje en especifico



        

        //Objetos
        this.person = new Person(0,0,0, 'initial');
    }

    draw(app) {
        app.background(255);
        
       

        //cambio de pantallas 
        switch(this.currentScreen){
            case 0 :
            app.image(this.screen3, 0,0, 1250,600);
                break;

            case 1 :
            app.image(this.screen1, 0,0, 1250,400);
            app.image(this.npc, 892, 64);
            app.fill(0);
            app.rect(25,400,1200,200);
            app.fill(255,200,200);
            app.text(this.currentText, 70,435 );
            app.image(this.nextButton, 70, this.btnPosY, 170,45);
                break;

            case 2:
            app.image(this.screen2, 0, 0, 1250, 600);
                break;

            case 3: 
            app.image(this.screen4, 0, 0, 1250, 600);
        };

        this.person.paint(app);

        //posicion actual del mouse
        app.textSize(20);
        app.fill(100);
        app.text(app.mouseX + 'X' + app.mouseY + 'Y', app.mouseX, app.mouseY);
    }

    mousePressed(app){
        switch(this.currentScreen){
            case 0:
                if(app.mouseX > 468 && app.mouseX < 768 && app.mouseY > 437 && app.mouseY < 505){
                    this.currentScreen = 1;
                }
                break;

            case 1: 
            this.newText ="Primeroo te daré algunos consejos: \nRecuerda que los colores oscuros van bien en la noche. Acentuar las caderas se logra enfatizando la cintura. \nTen muy en cuenta el clima para las prendas. Y las líneas dependiendo de su dirección pueden hacer que alguien se vea \n¡más delgado o con más peso!. \nEso es todo por ahora, veamos como lo haces...¡Buena suerte! ";

            if(app.mouseX > 76 && app.mouseX < 230 && app.mouseY > 516 && app.mouseY < 556){
                this.currentText= this.newText;
                this.btnPosY = 550;
            }

            if(this.currentText = this.newText ){
                if(app.mouseX > 76 && app.mouseX < 230 && app.mouseY > 550 && app.mouseY < 586){
                    this.currentScreen = 2;
                }

            }
                break;
        }
    }

}

export default Game;