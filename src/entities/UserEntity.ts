import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OperationEntity } from './OperationEntity'

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', unique: true })
    email: string

    @Column({ type: 'text' })
    password: string

    @OneToMany(() => OperationEntity, (operation) => operation.user)
    operation: OperationEntity[]
}