import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_CATEGORY } from '../../../actions/actionTypes';
import classes from './CategorySection.module.css';

const Item = ({ image, title, onClick }) => {
  return (
    <div className={classes.innerContainer} onClick={onClick}>
      <img className={classes.image} src={image} alt={title} />
      <button onClick={onClick} className={classes.button}>
        Design your own {title}
      </button>
    </div>
  );
};

const CategorySection = () => {
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

  return (
    <>
      <h1 className={classes.header}>Design Your Perfect Fit</h1>
      <div className={classes.container}>
        <Item
          image="/images/kt.jpg"
          title="Kurta"
          onClick={() => handleDashboardRedirect(1000)}
        />
        <Item
          image="/images/bl.jpg"
          title="Blouse"
          onClick={() => handleDashboardRedirect(1001)}
        />
        <Item
          image="/images/bm.jpg"
          title="Bottom"
          onClick={() => handleDashboardRedirect(1002)}
        />
        <Item
          image="/images/ss.jpg"
          title="Salwar Suit"
          onClick={() => handleDashboardRedirect(1003)}
        />
      </div>
    </>
  );
};

export default CategorySection;
