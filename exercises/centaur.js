class Centaur {
    constructor(name, breed){
        this.name = name
        this.breed = breed
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.crankyCounter = 0
    }

    shoot(){
        if (this.cranky === false && this.layingDown === false){
            this.crankyCounter += 1
            this.crankyCounter >= 3 ? this.cranky = true : this.cranky = false
            return 'Twang!!!'
        } else {
            return 'NO!'
        }
    }
    
    run(){
        if (this.layingDown === false){
            this.crankyCounter += 1
            this.crankyCounter >= 3 ? this.cranky = true : this.cranky = false
            return 'Clop clop clop clop!!!'
        } else {
            return 'NO!'
        }
    }

    sleep(){
        if(this.standing === true){
            return 'NO!'
        } else {
            this.cranky = false
            return 'ZZZZ'
        }
    }

    layDown(){
        this.standing = false;
        this.layingDown = true;
    }

    standUp(){
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion(){
        if(this.layingDown === false){
            this.cranky = !this.cranky;
        } else {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports = Centaur