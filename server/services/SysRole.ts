import { EntityRepository, Repository } from 'typeorm'
import SysUser from '../models/SysUser'
import SysUserRole from '../models/SysUserRole'
import SysRoleModel from '../models/SysRole'

@EntityRepository(SysRoleModel)
class SysRole extends Repository<SysRoleModel> {
  /** 获取用户权限 */
  async getRolePermission (userId: number): Promise<object> {
    let roles = new Set()
    if(userId === 1) {
      roles.add('admin')
    } else {
      let roleKey =  await this.createQueryBuilder('role')
      .select('role.roleKey')
      .leftJoinAndSelect(SysUserRole, "userRole", "userRole.roleId = role.roleId")
      .leftJoinAndSelect(SysUser, "user", "user.userId = userRole.userId")
      .where('role.delFlag = "0"')
      .andWhere('userRole.userId = :userId', {userId})
      .getMany()
      roleKey.forEach(item => {
        if (item.roleKey) roles.add(item.roleKey)
      })
    }
    return [...roles]
  }
}
export default SysRole
