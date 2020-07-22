class Lingkaran{
    constructor(r){
        this.r = r
    }

    luas = () =>{
        return Math.PI * Math.pow(this.r,2)
    }

    keliling = () =>{
        return 2 * Math.PI * this.r
    }
}

class Tabung extends Lingkaran{
    constructor(r,t){
        super(r)
        this.t = t
    }

    Volume = () =>{
        return Math.PI * Math.pow(this.r,2) * this.t
    }

    LuasPermukaan = () =>{
        return 2 * Math.PI * this.r * (this.r + this.t)
    }

    LuasAlas = () =>{
        return Math.PI * Math.pow(this.r,2)
    }

    LuasSelimut = () =>{
        return 2 * Math.PI * this.r * this.t
    }
}

let Atabung = new Tabung(5,9)
console.log(Atabung.LuasPermukaan() + " " + Atabung.LuasAlas() +" " + Atabung.LuasSelimut() + " " + Atabung.Volume() + " " + Atabung.keliling());

class Kerucut extends Lingkaran{
    constructor(r,t){
        super(r)
        this.t = t
    }

    Volume = () =>{
        return 1/3 * Math.PI * Math.pow(this.r,2) * this.t
    }

    LuasPermukaan = () =>{
        return Math.PI * this.r * (this.r + Math.sqrt(Math.pow(this.r,2) + Math.pow(this.t,2)))
    }

    LuasAlas = () =>{
        return Math.PI * Math.pow(this.r,2)
    }

    LuasSelimut = () =>{
        return Math.PI * this.r * Math.sqrt(Math.pow(this.r,2) + Math.pow(this.t,2))
    }
}

const AKerucut = new Kerucut(5,9);
console.log(AKerucut.Volume() + " " + AKerucut.LuasPermukaan() + " " + AKerucut.LuasAlas() + " " + AKerucut.LuasSelimut());

class Bola extends Lingkaran{
    constructor(r){
        super(r)
    }

    Volume = () =>{
        return 4/3 * Math.PI * Math.pow(this.r,3)
    }

    LuasPermukaan = () =>{
        return 4 * Math.PI * Math.pow(this.r,2)
    }
}

const ABola = new Bola(5)
console.log(ABola.Volume() + " " + ABola.LuasPermukaan())