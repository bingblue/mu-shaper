import { Column, CreateDateColumn, UpdateDateColumn, VersionColumn, AfterLoad, BeforeUpdate, AfterInsert } from 'typeorm'

/**
 * 用户表
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2020-02-07
 **/
abstract class Common {
  @Column({
    type: 'enum',
    enum: ['0', '1'],
    default: '0',
    comment: '状态（0正常 1停用）'
  })
  status: string

  @Column({
    type: 'enum',
    name: 'del_flag',
    enum: ['0', '2'],
    default: '0',
    comment: '删除标志（0代表存在 2代表删除）'
  })
  delFlag: string

  @Column({
    name: 'create_by',
    default: '',
    comment: '创建者',
    select: false
  })
  createBy: string

  @CreateDateColumn({
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
    select: false
  })
  createTime: Date

  @Column({
    name: 'update_by',
    default: '',
    comment: '更新者',
    select: false
  })
  updateBy: string

  @UpdateDateColumn({
    name: 'update_time',
    nullable: true,
    comment: '更新时间',
    select: false
  })
  updateTime: Date

  @VersionColumn({
    default: '0',
    comment: '版本号',
    select: false
  })
  _v: string

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string

  /** 查询之后调用 */
  @AfterLoad()
  loadHelper (): void {
    /** 修改时间格式等 */
    // this._v = `版本号为：${this._v}`
  }

  /** 更新之前调用 */
  @BeforeUpdate()
  updateHelper (): void {
    /** 设置更新人等 */
  }

  /** 插入之前调用 */
  @AfterInsert()
  insertHelper (): void {
    /** 设置创建人等 */
  }
}
export default Common
