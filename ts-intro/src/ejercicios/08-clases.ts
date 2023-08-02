/*
===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
    constructor(public alterEgo: string,
        public edad: number,
        nombreReal: string) {
        super(nombreReal, 'NY, USA');
        console.log("hola", nombreReal);
        this.miFuncion();
    }

    miFuncion() {
        this.alterEgo = 'Spideman';
        console.log("MiFuncion: ", this.alterEgo);
    }
}

const ironman = new Heroe('ironman', 45, 'Tony');
console.log(ironman);