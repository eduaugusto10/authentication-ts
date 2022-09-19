import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity('operation')
export class OperationEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, (user) => user.operation)
    user: UserEntity

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'float' })
    percentValue: number

    @Column({ type: 'float' })
    totalMoney: number    

}