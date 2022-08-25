class Hobbit {
    constructor(name){
        this.name = name;
        this.disposition = 'homebody';
        this.age = 0;
        this.adult = false;
        this.isShort = true;
        this.old = false;
        this.hasRing = this.checkRing();
    }

    celebrateBirthday(){
        this.age += 1;
        if(this.age >= 101){
            this.old = true 
        }
        else if(this.age > 32){
            this.adult = true 
        }
    }

    checkRing(){
        if(this.name === 'Frodo'){
            return true
        } else {
            return false
        }
    }
}

module.exports = Hobbit