import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import TableInfo from './TableInfo'

/**
 * 权限表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
@Entity()
class SysRole extends TableInfo{
  @PrimaryGeneratedColumn({
    name: 'role_id',
    comment: '角色ID'
  })
  roleId: number

  @Column({
    name: 'role_name',
    comment: '角色名称'
  })
  roleName: string

  @Column({
    name: 'role_key',
    unique: true,
    comment: '角色权限字符串'
  })
  roleKey: string

  @Column({
    name: 'role_sort',
    comment: '显示顺序'
  })
  roleSort: number

  @Column({
    name: 'data_scope',
    default: '1',
    comment: '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）'
  })
  dataScope: string
}
export default SysRole
