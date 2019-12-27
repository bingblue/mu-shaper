import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, AfterLoad } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn({
    comment: '用户ID'
  })
  id: number

  @Column({
    comment: '用户名'
  })
  username: string

  @Column({
    comment: '密码'
  })
  password: string

  @Column({
    comment: '姓名'
  })
  name: string

  @Column({
    type: 'enum',
    enum: ['男', '女', '人妖'],
    default: '人妖',
    comment: '性别'
  })
  sex: string

  @Column({
    unique: false,
    comment: '手机号'
  })
  phone: string

  @Column({
    type: 'text',
    comment: '地址'
  })
  address: string

  @CreateDateColumn({
    comment: '创建时间'
  })
  createAt: Date

  @UpdateDateColumn({
    comment: '更新时间'
  })
  updateAt: Date

  @VersionColumn({
    comment: '版本号'
  })
  _v: string

  @AfterLoad()
  timeHelper() {
    this._v = `版本号为：${this._v}`
  }
}
export default User
