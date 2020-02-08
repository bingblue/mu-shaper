import { EntityRepository, Repository } from 'typeorm'
import SysRoleModel from '../models/SysRole'

@EntityRepository(SysRoleModel)
class SysRole extends Repository<SysRoleModel> {
  /** 根据名称查找角色 */
  async findByName (name: string): Promise<object> {
    return this.createQueryBuilder('role')
      .where('role.name = :name', { name })
      .getOne()
  }

  /** 新增角色 */
  async saveRole (role: SysRoleModel): Promise<object> {
    let newRole = new SysRoleModel()
    return this.save(newRole)
  }

  /** 更新角色 */
  async updateRole (role: SysRoleModel): Promise<object> {
    let newRole = await this.findOne(role.id)
    return this.save(newRole)
  }

  /** 角色更新菜单 */
  async updateRoleMenu (roleId: number, menuList: Array<any>): Promise<object> {
    let role = await this.findOne(roleId)
    role.menus = menuList
    return this.save(role)
  }
}
export default SysRole
