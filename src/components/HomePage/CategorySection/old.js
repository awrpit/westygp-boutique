import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';
import classes from './CategorySection.module.css';
import lgClasses from './LargeScreens.module.css';
// import Modal from 'react-modal';

const CategorySection = ({ isMobile }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  // const [activeCategory, setActiveCategory] = useState();

  const handleDashboardRedirect = (categoryId) => {
    if (!categoryId) return;

    window.scrollTo(0, 0);

    dispatch({ type: CHANGE_CATEGORY, categoryId });
    history.push('/dashboard');
  };

  // const handleCatalogRedirect = (categoryId) => {
  //   let categoryName;

  //   switch (categoryId) {
  //     case 1000:
  //       categoryName = 'kurta';
  //       break;
  //     case 1001:
  //       categoryName = 'blouse';
  //       break;
  //     case 1002:
  //       categoryName = 'bottom';
  //       break;
  //     default:
  //       break;
  //   }

  //   window.scrollTo(0, 0);

  //   history.push(`/catalog/${categoryName}`);
  // };

  // const openModal = (category) => {
  //   setIsRedirectModalOpen(true);
  //   setActiveCategory(category);
  // };

  if (isMobile) {
    return (
      <>
        {/* <Modal
          isOpen={isRedirectModalOpen}
          onRequestClose={() => setIsRedirectModalOpen(false)}
          style={{
            content: {
              width: 'fit-content',
              margin: 'auto',
              height: 'fit-content',
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              gap: '20px',
            }}
          >
            <button
              onClick={() => handleCatalogRedirect(activeCategory)}
              className={classes.button}
            >
              VIEW CATALOG
            </button>
            <button
              onClick={() => handleDashboardRedirect(activeCategory)}
              className={classes.button}
            >
              DESIGN YOURSELF
            </button>
          </div>
        </Modal> */}
        <div
          style={{ marginTop: '80px', marginBottom: '20px' }}
          id="category-section-mobile"
          className={classes.container}
        >
          {/* Kurta */}
          <div
            className={`${classes.innerContainer} ${classes.kurtaContainer}`}
          >
            <img
              className={classes.image}
              src="./images/ghagra.jpg"
              alt="Shop Kurta"
            />
            <span className={classes.title}>Kurta</span>
            <span
              onClick={() => handleDashboardRedirect(1000)}
              className={classes.link}
              href={'/'}
            >
              Design Now
            </span>
          </div>

          {/* Blouse */}
          <div
            className={`${classes.innerContainer} ${classes.blouseContainer}`}
          >
            <img
              className={classes.image}
              src="./images/ghagra2.jpg"
              alt="Shop Blouse"
            />
            <span className={classes.title}>Blouse</span>
            <span
              onClick={() => handleDashboardRedirect(1001)}
              className={classes.link}
              href={'/'}
            >
              Design Now
            </span>
          </div>

          {/* Bottom */}
          <div
            className={`${classes.innerContainer} ${classes.bottomContainer}`}
          >
            <img
              className={classes.image}
              src="./images/ghagra3.jpg"
              alt="Shop Bottom"
            />
            <span className={classes.title}>Bottom</span>
            <span
              onClick={() => handleDashboardRedirect(1002)}
              className={classes.link}
              href={'/'}
            >
              Design Now
            </span>
          </div>
        </div>
      </>
    );
  }

  if (!isMobile) {
    return (
      <div id="category-section" className={lgClasses.container}>
        <img
          className={`${lgClasses.image} ${lgClasses.image1}`}
          src="./images/ghagra.jpg"
          alt="Shop Kurta"
        />
        <img
          className={`${lgClasses.image} ${lgClasses.image2}`}
          src="./images/ghagra2.jpg"
          alt="Shop Blouse"
        />
        <img
          className={`${lgClasses.image} ${lgClasses.image3}`}
          src="./images/ghagra3.jpg"
          alt="Shop Bottom"
        />

        <div className={`${lgClasses.textContainer} ${lgClasses.text1}`}>
          <span className={`${lgClasses.title} ${lgClasses.title1}`}>
            Kurta
          </span>
          <span className={`${lgClasses.link} ${lgClasses.link1}`} href={'/'}>
            Design Now
          </span>
        </div>

        <div className={`${lgClasses.textContainer} ${lgClasses.text2}`}>
          <span className={`${lgClasses.title} ${lgClasses.title2}`}>
            Blouse
          </span>
          <span className={`${lgClasses.link} ${lgClasses.link2}`} href={'/'}>
            Design Now
          </span>
        </div>

        <div className={`${lgClasses.textContainer} ${lgClasses.text3}`}>
          <span className={`${lgClasses.title} ${lgClasses.title3}`}>
            Bottom
          </span>
          <span className={`${lgClasses.link} ${lgClasses.link3}`} href={'/'}>
            Design Now
          </span>
        </div>
      </div>
    );
  }
};

export default CategorySection;
