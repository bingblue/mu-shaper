import { EntityRepository, Repository } from 'typeorm'
import SysMenuModel from '../models/SysMenu'

@EntityRepository(SysMenuModel)
class SysMenu extends Repository<SysMenuModel> {
  /** 根据名称查找菜单 */
  async findByName (name: string): Promise<object> {
    return this.createQueryBuilder('menu')
      .where('menu.name = :name', { name })
      .getOne()
  }

  /** 新增菜单 */
  async saveMenu (menu: SysMenuModel): Promise<object> {
    let newMenu = new SysMenuModel()
    return this.save(newMenu)
  }

  /** 更新菜单 */
  async updateMenu (menu: SysMenuModel): Promise<object> {
    let newMenu = await this.findOne(menu.id)
    return this.save(newMenu)
  }
}
export default SysMenu
