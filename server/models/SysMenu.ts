import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import Common from './Common'
import SysRole from './SysRole'

/**
 * 菜单表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-07
 **/
@Entity()
class SysMenu extends Common  {
  @PrimaryGeneratedColumn({
    comment: '菜单ID'
  })
  id: number

  @Column({
    comment: '菜单名称'
  })
  name: string

  @Column({
    name: 'parent_id',
    default: 0,
    comment: '父菜单ID'
  })
  parentId: number

  @Column({
    nullable: true,
    comment: '路由地址'
  })
  path: string

  @Column({
    nullable: true,
    comment: '组件路径'
  })
  component: string

  @Column({
    type: 'enum',
    name: 'is_frame',
    enum: ['Y', 'N'],
    default: 'N',
    comment: '外链（N否 Y是）'
  })
  isFrame: string

  @Column({
    type: 'enum',
    enum: ['M', 'C', 'F'],
    default: 'C',
    comment: '菜单类型（M目录 C菜单 F按钮）'
  })
  type: string

  @Column({
    nullable: true,
    comment: '权限标识'
  })
  perms: string

  @Column({
    default: '#',
    comment: '菜单图标'
  })
  icon: string
  
  @Column({
    default: 0,
    comment: '显示顺序'
  })
  sort: number

  /** 角色 */
  @ManyToMany(type => SysRole)
  roles: SysRole[]
}
export default SysMenu
