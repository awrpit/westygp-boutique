import {
  CHANGE_CATEGORY,
  SET_ACTIVE_PREFERENCE,
  REMOVE_PREFERENCE,
  SELECT_OPTION,
  UPDATE_TOTAL,
  UPDATE_IMG,
} from '../actions/actionTypes';
import {
  handleRemovePreference,
  selectOption,
  changeCategory,
  calculateCost,
} from '../services/util';

const initState = {
  category: 'scratch',
  categoryId: 0,
  baseCost: 0,
  preferences: [
    {
      id: 1,
      type: 'front',
      value: null,
      options: [
        {
          id: 11,
          title: 'Auto',
        },
        {
          id: 22,
          title: 'By Hand',
        },
      ],
    },
    {
      id: 2,
      type: 'back',
      value: null,
      options: [
        {
          id: 14,
          title: 'By Hand',
        },
        {
          id: 28,
          title: 'Auto',
        },
      ],
    },
  ],
  activeId: null,
  totalCost: 0,
  activeImgId: 0,
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      if (action.categoryId === state.categoryId) {
        return state;
      }

      return changeCategory(state, action);

    case SET_ACTIVE_PREFERENCE: {
      return {
        ...state,
        activeId: action.id,
      };
    }

    case SELECT_OPTION:
      return {
        ...state,
        preferences: selectOption(state, action),
      };

    case REMOVE_PREFERENCE:
      return {
        ...state,
        preferences: handleRemovePreference(state, action),
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        totalCost: calculateCost(state),
      };

    case UPDATE_IMG:
      return {
        ...state,
        activeImgId: action.id,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
