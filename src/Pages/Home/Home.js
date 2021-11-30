import { Link } from "react-router-dom";

import { Menu } from 'antd';

import routes from '../../Routes/Routes'

import './Home.css'

export default function Component() {

  return (
    <div>

      <Menu style={{ width: "100%" }} mode="inline" defaultOpenKeys={['root-0', 'root-1', 'root-2', 'root-3']} >
        {
          routes.sub.map((item, index) => {
            const key = "root-" + index
            if (item.sub) {
              return (
                <Menu.SubMenu key={key} icon={item.icon? item.icon : null} title={item.nm}>
                  {
                    item.sub.map((subItem, subIndex) => {
                      const subKey = key + "-" + subIndex
                      return (
                        <Menu.Item key={subKey} icon={subItem.icon? subItem.icon : null} >
                          <Link to={subItem.url ? subItem.url : "/debug"}>{subItem.nm}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </Menu.SubMenu>
              )
            }
            return <Menu.SubMenu key={key} icon={item.icon? item.icon : null} title={item.nm}></Menu.SubMenu>
          })
        }
      </Menu>

    </div>
  )
}