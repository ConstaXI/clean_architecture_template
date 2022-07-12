import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { IUser } from "../../domain/entities/User"

@Entity("users")
export default class UserEntity implements IUser {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Generated("uuid")
  @Column({ type: "uuid" })
  uuid: string

  @Column({ type: "varchar", length: 255, unique: true })
  email: string

  @Column({ type: "varchar", length: 255 })
  firstName: string

  @Column({ type: "varchar", length: 255 })
  surname: string

  @Column({ type: "varchar", length: 255 })
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt?: Date
}
