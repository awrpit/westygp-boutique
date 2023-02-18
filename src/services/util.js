import { data } from '../data/categoriesData';

export const selectOption = (state, action) => {
  const newPreferences = [...state.preferences];
  const prefId = action.prefId;

  for (let pref of newPreferences) {
    if (pref.id === prefId) {
      pref.value = action.optionId;
    }
  }

  return newPreferences;
};

export const handleRemovePreference = (state, action) => {
  const newPreferences = [...state.preferences];
  const id = action.id;

  for (let item of newPreferences) {
    if (item.id === id) {
      newPreferences[newPreferences.indexOf(item)].value = '';
    }
  }

  return newPreferences;
};

export const changeCategory = (state, action) => {
  const res = data.find((item) => item.id == action.categoryId);

  return {
    ...state,
    category: res.title,
    baseCost: res.baseCost,
    categoryId: res.id,
    preferences: res.preferences,
    activeId: res.activeId,
    activeImgId: res.activeImgId,
  };
};

export const getChoiceCostFromId = (id, choices) => {
  if (!id) return 0;

  for (let choice of choices) {
    if (choice.id === id) {
      return choice.cost;
    }
  }
};

export const calculateCost = (state) => {
  let total = 0;

  total += state.baseCost;

  for (let pref of state.preferences) {
    total += getChoiceCostFromId(pref.value, pref.options);
  }

  return total;
};

export const canContinueToCart = (state) => {
  const { categoryId, baseCost, preferences } = state;

  if (!categoryId || baseCost < 0) {
    return false;
  }

  for (let pref of preferences) {
    if (!pref.value) {
      return false;
    }
  }

  return true;
};
