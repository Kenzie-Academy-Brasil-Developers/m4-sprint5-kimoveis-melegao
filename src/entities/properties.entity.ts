import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import  { v4 as uuid } from 'uuid'
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules_users_properties.entity";


@Entity('properties')

export class Properties {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    sold: boolean

    @Column('decimal', {precision: 12, scale: 2})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

    @OneToOne(() => Addresses, {eager: true}) @JoinColumn()
    address: Addresses

    @ManyToOne(() => Categories, {eager: true})
    category: Categories

    @OneToMany(() => Schedules, schedules => schedules.property)
    schedules: Schedules[]

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}

