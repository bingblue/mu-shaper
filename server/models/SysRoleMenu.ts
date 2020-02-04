import { Entity, PrimaryColumn } from 'typeorm'

/**
 * 用户-权限表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
@Entity()
class SysRoleMenu{
  @PrimaryColumn({
    name: 'role_id',
    comment: '角色ID'
  })
  roleId: number

  @PrimaryColumn({
    name: 'menu_id',
    comment: '菜单ID'
  })
  menuId: number
}
export default SysRoleMenu
