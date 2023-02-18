import React, { useEffect } from 'react';
import { Menu } from 'antd';
import firebase from 'firebase';

const { SubMenu } = Menu;

function AdminHeader() {
  const handleClick = (e) => {
    console.log('click ', e);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (
        user.uid === 'AIdwGDAfQ3WzI7FPgcMyKoJ9HPS2' ||
        user.uid === '3eA0t7Vn2wbQvcLABkmBF0PTOyl1'
      ) {
      } else {
        // window.location.replace('/');
      }
    });
  });

  return (
    <>
      <Menu onClick={() => handleClick()} mode="horizontal">
        <Menu.Item key="orders">
          <a href="/orders">Orders</a>
        </Menu.Item>
        <Menu.Item key="Requests">
          <a href="/requests">Requests</a>
        </Menu.Item>
        <SubMenu key="marked" title="Marked As Seen">
          <Menu.Item key="orders-seen">
            <a href="/seen-orders">Orders</a>
          </Menu.Item>
          <Menu.Item key="requests-seen">
            <a href="/seen-requests">Requests</a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="form" title="Form Submissions">
          <a href="/form-submissions">Form Submissions</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default AdminHeader;
