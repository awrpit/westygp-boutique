import React, { useState } from 'react';
import NavItem from './NavItem';
import { Dropdown, Menu, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';
import '../style.css';
import Sidebar from 'react-sidebar';

import { AiFillCloseCircle } from 'react-icons/ai';

const { Option } = Select;

const closeButtonStyle = {
  margin: 0,
  top: 20,
  right: 20,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};

export default ({ cartItemCount }) => {
  const [sidebarState, setSidebarState] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleDashboardRedirect = (categoryId) => {
    if (!categoryId) return;

    dispatch({ type: CHANGE_CATEGORY, categoryId });
    history.push('/dashboard');
  };

  return (
    <div className="main-nav">
      <Sidebar
        sidebar={
          <div>
            <AiFillCloseCircle
              size="22"
              onClick={() => setSidebarState(false)}
              style={closeButtonStyle}
            />
            <br />
            <Menu
              className="teko-text"
              style={{
                fontSize: 18,
              }}
              defaultSelectedKeys="1"
              mode="inline"
            >
              <Menu.Item>
                <a className="teko-text" href="/">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/catalog/blouse">
                  Blouse
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/catalog/kurta">
                  Kurta
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/catalog/bottom">
                  Bottom
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/soon/salwar%20suit">
                  Salwar
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/soon/gown">
                  Gown
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="teko-text" href="/soon/semi-stiched%20ghagra">
                  Semi-Stiched Ghagra
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/soon/kids%20wear" className="teko-text">
                  Kids Wear
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/soon/semi-western%20wear" className="teko-text">
                  Semi-Western Wear
                </a>
              </Menu.Item>
              <Menu.Item key="1">
                <Select
                  className="teko-text"
                  style={{
                    fontSize: 18,
                  }}
                  defaultValue="null"
                  bordered={false}
                  placeholder="Design Yourself"
                  onChange={(value) => handleDashboardRedirect(value)}
                >
                  <Option value="null" disabled>
                    Design Yourself
                  </Option>
                  <Option value="1000">Kurta</Option>
                  <Option value="1001">Blouse</Option>
                  <Option value="1002">Bottom</Option>
                  <Option value="1003">Salwar</Option>
                </Select>
              </Menu.Item>
            </Menu>
          </div>
        }
        open={sidebarState}
        styles={{
          sidebar: {
            background: 'white',
            padding: 20,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '70%',
          },
        }}
      ></Sidebar>
      <div
        style={{
          zIndex: 1000,
        }}
        className="fix-center"
      >
        <div className="logo-later">
          <a href="/">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <div className="hamburger">
          <div
            onClick={() => {
              setSidebarState(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          style={{
            zIndex: 1000,
          }}
          className="top-nav-right"
        >
          <a href="/user" className="add-line">
            <i className="fa fa-user"></i>
          </a>
          <a href="/cart" className="">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
        <div className="bottom-nav close-nav">
          <NavItem href="/catalog/blouse" label="BLOUSE" />
          <NavItem href="/catalog/kurta" label="KURTA" />
          <NavItem href="/catalog/bottom" label="BOTTOM" />
          <NavItem href="/soon/salwar%20suit" label="SALWAR SUIT" />
          <NavItem href="/soon/gown" label="GOWN" />
          <NavItem
            href="/soon/semi-stiched%20ghagra"
            label="SEMI-STITCHED GHAGRA"
          />
          <NavItem href="/soon/kids%20wear" label="KIDS WEAR" />
          <NavItem href="/soon/semi-western%20wear" label="SEMI-WESTERN WEAR" />
          {/* <NavItem href='' label='SEMI-WESTERN WEAR' /> */}
          {/* <div> */}
          <Select
            className="teko-text"
            style={{
              // fontWeight: "normal",
              fontSize: 19,
              paddingLeft: 10,
            }}
            defaultValue="null"
            bordered={false}
            placeholder="Design Yourself"
            onChange={(value) => handleDashboardRedirect(value)}
          >
            <Option value="null" disabled>
              Design Yourself
            </Option>
            <Option value="1000">Kurta</Option>
            <Option value="1001">Blouse</Option>
            <Option value="1002">Bottom</Option>
            <Option value="1003">Salwar</Option>
          </Select>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
