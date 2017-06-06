export const reducerGetPosts = (state, action) => {
  return {
    ...state,
    isFetching: false
  };
};

export const reducerGetPostsSuccess = (state, action) => {
  return {
    ...state,
    isFetching: true,
    data: action.payload
  };
};

export const reducerGetPostsFail = (state, action) => {
  return {
    ...state,
    isFetching: false,
    error: action.payload
  };
};
