class Werewolf {
    constructor(name, location){
        this.name = name
        this.location = location
        this.human = true
        this.wolf = false
        this.hungry = false
    }

    change(){
        this.human = !this.human
        this.wolf = !this.wolf
        this.hungry = !this.hungry
    }

    eat(victim){
        if(this.wolf === true){
            victim.alive = false
            this.change()
        } else {
            return 'Humans cant eat other humans!'
        }
    }
}

module.exports = Werewolf