import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import TableInfo from './TableInfo'

/**
 * 菜单表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
@Entity()
class SysMenu extends TableInfo{
  @PrimaryGeneratedColumn({
    name: 'menu_id',
    comment: '菜单ID'
  })
  menuId: number

  @Column({
    name: 'menu_name',
    comment: '菜单名称'
  })
  menuName: string

  @Column({
    name: 'parent_id',
    default: '0',
    comment: '父菜单ID'
  })
  parentId: number

  @Column({
    name: 'order_num',
    default: '0',
    comment: '显示顺序'
  })
  orderNum: number

  @Column({
    default: '',
    comment: '路由地址'
  })
  path: string

  @Column({
    nullable: true,
    comment: '组件路径'
  })
  component: string

  @Column({
    name: 'is_frame',
    default: 1,
    comment: '是否为外链（0是 1否）'
  })
  isFrame: number

  @Column({
    name: 'menu_type',
    default: '',
    comment: '菜单类型（M目录 C菜单 F按钮）'
  })
  menuType: string

  @Column({
    default: '0',
    comment: '菜单状态（0显示 1隐藏）'
  })
  visible: string

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
}
export default SysMenu
