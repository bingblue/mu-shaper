import { EntityRepository, Repository } from 'typeorm'
import SysUserRole from '../models/SysUserRole'
import SysRoleMenu from '../models/SysRoleMenu'
import SysRole from '../models/SysRole'
import SysUser from '../models/SysUser'
import SysMenuModel from '../models/SysMenu'

@EntityRepository(SysMenuModel)
class SysMenu extends Repository<SysMenuModel> {
  /** 获取用户菜单权限 */
  async getMenuPermission (userId: number): Promise<object> {
    let menus = new Set()
    if(userId == 1) {
      menus.add('*:*:*')
    } else {
      let perms =  await this.createQueryBuilder('menu')
      .select('menu.perms')
      .leftJoinAndSelect(SysRoleMenu, "roleMenu", "menu.menuId = roleMenu.menuId")
      .leftJoinAndSelect(SysUserRole, "userRole", "roleMenu.roleId = userRole.roleId")
      .where('userRole.userId = :userId', {userId})
      .getMany()
      perms.forEach(item => {
        if(item.perms) menus.add(item.perms)
      })
    }
    return [...menus]
  }

  /** 获取用户菜单 */
  async selectMenuTreeByUserId (userId: number): Promise<Array<any>> {
    let data
    if(userId == 1) {
      data =  await this.createQueryBuilder('menu')
      .where('menu.menu_type in ("M", "C")')
      .andWhere('menu.visible = 0')
      .getMany()
    } else {
      data =  await this.createQueryBuilder('menu')
      .leftJoinAndSelect(SysRoleMenu, "roleMenu", "menu.menuId = roleMenu.menuId")
      .leftJoinAndSelect(SysUserRole, "userRole", "roleMenu.roleId = userRole.roleId")
      .leftJoinAndSelect(SysRole, "role", "userRole.roleId = role.roleId")
      .leftJoinAndSelect(SysUser, "user", "userRole.userId = user.userId")
      .where('user.userId = :userId', {userId})
      .andWhere('menu.menu_type in ("M", "C")')
      .andWhere('menu.visible = 0')
      .andWhere('role.status = 0')
      .orderBy('menu.parent_id')
      .addOrderBy('menu.order_num')
      .getMany()
    }
    data = this.buildMenu(data)
    return this.getMenuTree(data)
  }

  /** 菜单数据变成树结构 */
  getMenuTree (arr: Array<any>, father: any = {menuId: 0, parentId: 0, name: '根目录'}): Array<any> {
    // 遍历数组，找到当前father的所有子节点
    for (var i = 0; i < arr.length; i++) {   
      if (arr[i].parentId == father.menuId) {
        // 这里是有子节点才需要有node属性（也就是说有node里绝不会为空list）
        if (!father.children) { 
          father.children = []
        }
        var son = arr[i]
        father.children.push(son)
        arr.splice(i, 1) // 删除该节点，当list为空的时候就终止递归
        i-- // 由于删除了i节点，所以下次访问的元素下标应该还是i
      }
    }
    // 再对每一个子节点进行如上操作
    if (father.children) { // 需要先判断有没有子节点
      var childs = father.children
      for (var i=0; i<childs.length; i++) {
        this.getMenuTree(arr, childs[i]) // 调用递归函数
      }
    }
    return father.children
  }

  /** 构建前端需要的菜单 */
  buildMenu (arr: Array<any>): Array<any> {
    arr.forEach(item => {
      item.name = item.path
      if (item.parentId == 0 && item.isFrame == 1) item.path = '/' + item.path
      item.component = item.component || 'Layout'
      item.meta = {
        title: item.menuName,
        icon: item.icon
      }
      let hasChildren = item.children ? (item.children.length > 0) : false
      if (hasChildren && item.menuType == 'M') {
        item.alwaysShow = true
        item.redirect = 'noRedirect'
      }
    })
    return arr
  }
}
export default SysMenu
