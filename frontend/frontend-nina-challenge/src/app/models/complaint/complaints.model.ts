export class Complaints {
    id:string
    place:string
    at_moment:boolean
    datetime:string
    modified_at:string
    created_at:string
    description:string
    situation:string[]
    type:string

    constructor(id:string, place:string, at_moment:boolean, datetime:string, modified_at:string, created_at:string, description:string, situation:string[], type:string){
        this.id = id
        this.place = place
        this.at_moment = at_moment
        this.datetime = datetime
        this.modified_at = modified_at
        this.created_at = created_at
        this.description = description
        this.situation = situation
        this.type = type
    }
    
}
