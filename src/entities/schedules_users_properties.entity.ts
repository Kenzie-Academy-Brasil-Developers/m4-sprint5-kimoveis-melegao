import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import  { v4 as uuid } from 'uuid'
import { Properties } from "./properties.entity";
import { User } from "./user.entity";



@Entity('schedules')

export class Schedules {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    hour: string

    @ManyToOne(() => Properties, {eager: true})
    property: Properties

    @ManyToOne(() => User, {eager: true})
    user: User

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}

