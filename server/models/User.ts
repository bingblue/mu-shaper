import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, AfterLoad } from 'typeorm'

/**
 * User表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
@Entity()
class User {
  @PrimaryGeneratedColumn({
    comment: '用户ID'
  })
  id: number

  @Column({
    unique: true,
    comment: '用户名'
  })
  username: string

  @Column({
    default: '人妖',
    comment: '密码'
  })
  password: string

  @Column({
    nullable: true,
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
    unique: true,
    nullable: true,
    comment: '手机号'
  })
  phone: string

  @Column({
    type: 'text',
    nullable: true,
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
  timeHelper (): void {
    this._v = `版本号为：${this._v}`
  }
}
export default User
