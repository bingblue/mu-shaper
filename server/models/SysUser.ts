import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import TableInfo from './TableInfo'

/**
 * 用户表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
@Entity()
class SysUser extends TableInfo{
  @PrimaryGeneratedColumn({
    name: 'user_id',
    comment: '用户ID'
  })
  userId: number

  @Column({
    name: 'dept_id',
    nullable: true,
    comment: '部门ID'
  })
  deptId: number

  @Column({
    name: 'user_name',
    unique: true,
    comment: '用户账号'
  })
  userName: string

  @Column({
    name: 'nick_name',
    nullable: true,
    comment: '用户昵称'
  })
  nickName: string

  @Column({
    name: 'user_type',
    default: '00',
    comment: '用户类型（00系统用户）'
  })
  userType: string

  @Column({
    default: '',
    comment: '用户邮箱'
  })
  email: string

  @Column({
    default: '',
    comment: '手机号码'
  })
  phonenumber: string

  @Column({
    default: '0',
    comment: '用户性别（0男 1女 2未知）'
  })
  sex: string

  @Column({
    default: '',
    comment: '头像地址'
  })
  avatar: string

  @Column({
    default: '',
    comment: '密码'
  })
  password: string

  @Column({
    name: 'login_ip',
    default: '',
    comment: '最后登陆IP'
  })
  loginIp: string

  @Column({
    name: 'login_date',
    nullable: true,
    comment: '最后登陆时间'
  })
  loginDate: Date
}
export default SysUser
