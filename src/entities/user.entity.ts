import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import  { v4 as uuid } from 'uuid'

@Entity('users')

export class User {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}

