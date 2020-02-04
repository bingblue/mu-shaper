import { Entity, PrimaryColumn } from 'typeorm'

/**
 * 用户-权限表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
@Entity()
class SysUserRole{
  @PrimaryColumn({
    name: 'user_id',
    comment: '用户ID'
  })
  userId: number

  @PrimaryColumn({
    name: 'role_id',
    comment: '角色ID'
  })
  roleId: number
}
export default SysUserRole
