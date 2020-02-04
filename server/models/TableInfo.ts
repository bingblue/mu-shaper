import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

/**
 * 用户表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-01
 **/
abstract class TableInfo {
  @Column({
    default: '0',
    comment: '状态（0正常 1停用）'
  })
  status: string

  @Column({
    name: 'del_flag',
    default: '0',
    comment: '删除标志（0代表存在 2代表删除）'
  })
  delFlag: string

  @Column({
    name: 'create_by',
    default: '',
    comment: '创建者'
  })
  createBy: string

  @CreateDateColumn({
    name: 'create_time',
    nullable: true,
    comment: '创建时间'
  })
  createTime: Date

  @Column({
    name: 'update_by',
    default: '',
    comment: '更新者'
  })
  updateBy: string

  @UpdateDateColumn({
    name: 'update_time',
    nullable: true,
    comment: '更新时间'
  })
  updateTime: Date

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string
}
export default TableInfo
