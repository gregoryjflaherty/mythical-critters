class Medusa {
    constructor(name){
        this.name = name
        this.statues = []
    }

    stare(victim){
        if(this.statues.length === 3){
            let unstonedVictim = this.statues.shift()
            unstonedVictim.stoned = false
            this.statues.push(victim)
            victim.stoned = true
        } else {
            this.statues.push(victim)
            victim.stoned = true
        }
    }
}

module.exports = Medusa;