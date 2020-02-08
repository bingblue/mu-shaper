import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'
import Common from './Common'
import SysUser from './SysUser'
import SysMenu from './SysMenu'

/**
 * 角色表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-02-07
 **/
@Entity()
class SysRole extends Common {
  @PrimaryGeneratedColumn({
    comment: '角色ID'
  })
  id: number

  @Column({
    unique: true,
    comment: '角色名称'
  })
  name: string

  @Column({
    unique: true,
    comment: '角色权限字符串'
  })
  key: string

  @Column({
    default: 0,
    comment: '显示顺序'
  })
  sort: number

  @Column({
    type: 'enum',
    name: 'data_scope',
    enum: ['1', '2', '3', '4'],
    default: '1',
    comment: '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）'
  })
  dataScope: string

  /** 用户 */
  @ManyToMany(type => SysUser)
  users: SysUser[]

  /** 菜单 */
  @ManyToMany(type => SysMenu)
  @JoinTable({
    name: "sys_role_menu",
    joinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "menu_id",
      referencedColumnName: "id"
    }
  })
  menus: SysMenu[]
}
export default SysRole
