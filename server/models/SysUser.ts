import { Entity, PrimaryGeneratedColumn, Column, Generated, AfterInsert, ManyToMany, JoinTable } from 'typeorm'
import Common from './Common'
import SysRole from './SysRole'

/**
 * 用户表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-02-07
 **/
@Entity()
class SysUser extends Common {
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
    comment: '密码',
    select: false
  })
  password: string

  @Column({
    nullable: true,
    comment: '昵称'
  })
  nickname: string

  @Column({
    nullable: true,
    comment: '头像地址'
  })
  avatar: string

  @Column({
    type: 'enum',
    enum: ['M', 'F', 'S'],
    default: 'S',
    comment: '性别（M男，F女，S人妖）'
  })
  sex: string

  @Column({
    unique: true,
    nullable: true,
    comment: '手机号'
  })
  phone: string

  @Column({
    nullable: true,
    comment: '邮箱'
  })
  email: string

  @Column({
    type: 'text',
    nullable: true,
    comment: '地址'
  })
  address: string
  
  /** 关联各个账号 */
  @Column({
    name: 'bb_id',
    unique: true,
    comment: 'bingblue ID，类似QQ号'
  })
  bbId: number

  @Column({
    name: 'github_id',
    unique: true,
    nullable: true,
    comment: 'github ID'
  })
  githubId: string

  @Column({
    name: 'wechat_id',
    unique: true,
    nullable: true,
    comment: '微信openID'
  })
  wechatId: string

  @Column({
    name: 'qq_id',
    unique: true,
    nullable: true,
    comment: 'QQ号'
  })
  qqId: string

  @Column({
    name: 'weibo_id',
    unique: true,
    nullable: true,
    comment: '微博ID'
  })
  weiboId: string

  /** 角色 */
  @ManyToMany(type => SysRole)
  @JoinTable({
    name: "sys_user_role",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    }
  })
  roles: SysRole[]

  /** 插入之前调用 */
  @AfterInsert()
  insertHelper (): void {
    /** 第一个用户ID为100001 */
    // if (this.userId < 100000) this.userId = 100001
  }
}
export default SysUser
