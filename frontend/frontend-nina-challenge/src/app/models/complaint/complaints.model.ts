export class Complaints {
    _id:string
    place:string
    at_moment:boolean
    datetime:Date
    modified_at:Date
    created_at:Date
    description:string
    situation:string[]
    type:string

    constructor(_id:string, place:string, at_moment:boolean, datetime:Date, modified_at:Date, created_at:Date, description:string, situation:string[], type:string){
        this._id = _id
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
