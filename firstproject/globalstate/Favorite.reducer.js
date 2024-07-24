export const favoriteReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_FAVORITE":
        return {
          ...state,
          favorites: [...state.favorites, action.payload], //adds new element to the favorites array from userContext.js
        };
  
      case "REMOVE_FROM_FAVORITE":
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== action.payload),
        };
  
      default:
        return state;
    }
  };