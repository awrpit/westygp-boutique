import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';
import classes from './NewHeader.module.css';

const NewHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDashboardRedirect = (categoryId) => {
    if (!categoryId) return;

    dispatch({ type: CHANGE_CATEGORY, categoryId });
    history.push('/dashboard');
  };

  return (
    <div id="new-header" className={classes.container}>
      <img
        onClick={() => history.push('/')}
        className={classes.logo}
        src="/images/logo.png"
        alt="Shreya Boutique Logo"
      />
      <div className={classes.menu}>
        <a href="/catalog/blouse" className={classes.menuItem}>
          Blouse
        </a>
        <a href="/catalog/kurta" className={classes.menuItem}>
          Kurta
        </a>
        <a href="/catalog/bottom" className={classes.menuItem}>
          Bottom
        </a>
        <a href="/soon/salwar%20suit" className={classes.menuItem}>
          Salwar Suit
        </a>
        <a href="/soon/gown" className={classes.menuItem}>
          Gown
        </a>
        <a href="/soon/semi-stiched%20ghagra" className={classes.menuItem}>
          Semi-stitched Ghagra
        </a>
        <a href="/soon/kids%20wear" className={classes.menuItem}>
          Kids wear
        </a>
        <a href="/soon/semi-western%20wear" className={classes.menuItem}>
          Semi-western Wear
        </a>
        <a href="/about" className={classes.menuItem}>
          About Us
        </a>
        {/* TODO: Dashboard dropdown */}
        <Select
          style={{
            fontSize: 16,
            position: 'relative',
            bottom: '2px',
            borderRadius: '30px',
            backgroundColor: 'rgb(229, 54, 55)',
            color: 'white',
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
      </div>
      <div className={classes.rightElements}>
        <a href="/user" className={`add-line ${classes.rightItem}`}>
          <i className="fa fa-user"></i>
        </a>
        <a href="/cart" className={classes.rightItem}>
          <i className="fa fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default NewHeader;
