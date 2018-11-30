import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import "./index.less"


class Owner extends Component {

    /**
     * todo 自定义路由跳转
     *
     * @memberof Owner
     */
    navClick = ()=>{
        this.props.onRouteChange && this.props.onRouteChange('个人中心',null,'test4')
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="javascript:void(0);" onClick={this.navClick}>个人中心</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="act-owner">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        Administrators
                        <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

export default Owner;