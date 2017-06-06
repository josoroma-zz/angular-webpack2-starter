export const reducerIncrement = (state) => {
  return {
    ...state,
    counter: state.counter + 1
  };
};
