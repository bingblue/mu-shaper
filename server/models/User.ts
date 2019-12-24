import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column("text")
  address: string
}
export default User
