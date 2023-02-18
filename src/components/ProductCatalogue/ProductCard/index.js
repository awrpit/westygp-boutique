import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';
import { useHistory } from 'react-router-dom';
import {
  Modal,
  Image,
  Button,
  Input,
  Form,
  notification,
  InputNumber,
  Row,
  Col,
} from 'antd';
import firebase from 'firebase';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const contentStyle = {
  color: '#000',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#fff',
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default ({
  id,
  title,
  description,
  price,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  images,
}) => {
  const onFinish = (values) => {
    const db = firebase.firestore();

    db.collection('enquiries')
      .doc()
      .set({
        userName: values.name,
        userPhone: values.phone,
        userEmail: values.email,
        product: select.title,
        productImage: select.images[0],
        done: false,
      })
      .then(() => {
        setVisible(false);
        openNotification();
        axios.post('https://westygo-api.herokuapp.com/order', {
          mail: values.email,
          subject: `Thanks for placing an order ${values.email} - ShreyaBoutique.com`,
          message: `We are grateful to serve you. Our executive will reach out to you on provided phone number within the next 2 days.
          In case you have any doubt, feel free to contact us at xyz@abab.com or +91-xxxxxxxxxx.
          Regards, Team SB.`,
        });
      });
  };

  const openNotification = () => {
    notification['success']({
      message: 'Order Placed',
      description:
        'We will get back to you on the provided phone number within the next 2 days. Thanks!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const [select, setSelect] = useState({
    title: '',
    images: [],
  });

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (data) => {
    // const db = firebase.firestore()

    // db.collection("enquiry").doc().set({

    // })
    console.log(data);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDesignSelect = () => {
    dispatch({ type: CHANGE_CATEGORY, categoryId: id });
    history.push('/dashboard');
  };

  const [slide, setSlide] = useState(0);

  return (
    <React.Fragment>
      <div className="col-lg-4">
        <div className="img-wrapper">
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" className="show-on-hover" />
          <div className="overlay-wishlist-hover">
            <i className="fa fa-hand-pointer-o" aria-hidden="true"></i>
            {/* <i className='fa fa-heart-o' aria-hidden='true'></i> */}
          </div>

          <div className="prods-overlay-text">
            <div className="d-flex">
              <a
                className="black-btn"
                data-toggle="modal"
                data-target="#productDetailModal"
                onClick={() => {
                  setSelect({
                    title: title,
                    images: images,
                  });
                  showModal();
                }}
              >
                SHOP NOW
              </a>
              {/* <a onClick={handleDesignSelect} className='white-btn'>
                SELECT DESIGN
              </a> */}
            </div>
          </div>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        {/* <div className='price'>Rs. {price}/-</div> */}
      </div>

      <Modal
        title={select.title}
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
        footer={[]}
        width="700px"
      >
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Carousel
              autoPlay={true}
              autoPlaySpeed={2000}
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              draggable={false}
              focusOnSelect={false}
              itemClass=""
              keyBoardControl={false}
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
            >
              {select.images.map((item) => {
                console.log(item);
                return (
                  <div>
                    <img alt="images" src={item} />
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div
              style={{
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <p>
                Place a request order if you liked the design or embroidery. Our
                team will get back to you with all the details!
              </p>
              <Form
                style={{
                  marginTop: 40,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: 'Please enter your name!' },
                  ]}
                >
                  <Input name="name" placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your phone number!',
                    },
                  ]}
                >
                  <Input
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                  ]}
                >
                  <Input name="email" placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      backgroundColor: '#000',
                      borderColor: '#000',
                      color: '#fff',
                    }}
                    htmlType="submit"
                    type="submit"
                  >
                    Submit
                  </Button>
                  {/* <Button style={{
                    marginLeft: 5
                  }} key="back" onClick={() => handleCancel()}>
                    Return
                  </Button> */}
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
};
