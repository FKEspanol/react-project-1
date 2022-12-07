const actions = {
  SET_USER: "SET_USER",
  SET_ALL_USER: "SET_ALL_USER",
  ADD_USER: "ADD_USER",
};

const initialState = {
  allUsers: [],
  user: {},
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "SET_ALL_USER":
      return {
        ...state,
        allUsers: [...action.payload],
      };

    case "ADD_USER":
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
  }
};

export { actions, initialState, reducer };
