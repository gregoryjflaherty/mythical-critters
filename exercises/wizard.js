class Wizard {
    constructor(attributeHash){
        this.name = attributeHash['name']
        this.bearded = this.checkBeard(attributeHash)
        this.rested = true
        this.spells = 0
    }

    checkBeard(attributeHash){
        if(attributeHash['bearded'] === undefined){
            return true
        } else {
            return attributeHash['bearded']
        }
    }

    incantation(text){
        return text.toUpperCase()
    }

    cast(){
        if(this.spells < 3){
            this.spells += 1
            this.spells >= 3 ? this.rested = false : this.rested = true
            return 'MAGIC BULLET'
        } else {
            return 'I SHALL NOT CAST!!'
        }
    }
}

module.exports = Wizard;