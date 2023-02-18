import { Modal, Button, Input, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import MeasurementCard from './MeasurementCard';
import firebase from 'firebase';

export default () => {
  const [modalState, setModalState] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [measurements, setMeasurements] = useState(['My Field']);
  const [user, setUser] = useState();

  useEffect(() => {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);

        db.collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            setSelectedProduct(doc.data().cart.category.toLowerCase());
            setFormFields(doc.data().cart.category.toLowerCase());
          });
      }
    });
  }, []);

  const setFormFields = (product) => {
    if (product === 'kurta') {
      const array = [
        'Full Length',
        'Waist Length',
        'Chest Round',
        'Waist Round',
        'Hip Round',
        'Shoulder',
        'Front Neck',
        'Back Neck',
        'Sleeve Length',
        'Sleeve Round',
        'Armol Round',
        'Hip Length',
      ];
      setMeasurements(array);
    } else if (product === 'blouse') {
      const array = [
        'Full Length',
        'Chest Round',
        'Waist Round',
        'Front Neck',
        'Back Neck',
        'Shoulder',
        'Sleeve Length',
        'Sleeve Round',
        'Armol Round',
      ];
      setMeasurements(array);
    } else if (product === 'bottom') {
      const array = ['Full Length', 'Bottom Round', 'Waist Round'];
      setMeasurements(array);
    } else {
      const array = [
        'Full Length',
        'Waist Length',
        'Waist Round',
        'Chest Round',
        'Hip Round',
        'Front Neck',
        'Back Neck',
        'Shoulder',
        'Sleeve Length',
        'Sleeve Round',
        'Armol Round',
      ];
      setMeasurements(array);
    }
  };

  const handleCancel = () => {
    setModalState(false);
  };

  const onSubmit = (data) => {
    const db = firebase.firestore();
    console.log(data);
    db.collection('users')
      .doc(user)
      .update({
        measurements: data,
      })
      .then(() => {
        window.location.replace('/order');
      });
  };

  return (
    <React.Fragment>
      <Modal
        title="Measurements"
        visible={modalState}
        onCancel={() => handleCancel()}
        footer={[]}
      >
        <Form onFinish={onSubmit}>
          {measurements.map((item) => {
            return (
              <Form.Item
                name={item}
                style={{
                  marginBottom: 20,
                }}
              >
                <Input type="number" required="true" addonBefore={item} />
              </Form.Item>
            );
          })}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderColor: '#000',
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <section className="section-padding">
        <div className="fix-center">
          <div className="heading">
            <h1>Choose your measurements</h1>
          </div>
          <div className="measurement-options-wrapper">
            {/* <MeasurementCard
              title='MEASURE YOURSELF'
              description='Click SELECT to enter your the measurements required for the product.'
              imgSrc='/images/arrow.png'
            /> */}
            {/* <MeasurementCard
              title='DESIGN YOURSELF'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, nobis!'
              imgSrc='/images/color-wheel.png'
            /> */}
            {/* <MeasurementCard
              title='MEASURE GARMENT'
              description='We will reach out to you for copying the measurements from your garments.'
              imgSrc='/images/upload.png'
            /> */}

            <div className="measurement-option">
              <h3>MEASURE YOURSELF</h3>
              <div className="options-img">
                <img src="/images/arrow.png" alt="" />
              </div>
              <p>
                Click SELECT to enter the measurements required for the product.
              </p>
              <a
                onClick={() => {
                  setModalState(true);
                }}
                className="black-btn"
              >
                SELECT
              </a>
            </div>

            <div className="measurement-option">
              <h3>MEASURE GARMENT</h3>
              <div className="options-img">
                <img src="/images/upload.png" alt="" />
              </div>
              <p>
                Kindly Send in an already stitched Product when our delivery
                executive comes to pick up the cloth materials and we'll copy
                the measurement from it.
              </p>
              <a href="/order" className="black-btn">
                SELECT
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
