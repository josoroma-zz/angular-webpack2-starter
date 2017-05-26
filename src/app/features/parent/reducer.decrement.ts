export const reducerDecrement = (state) => {
  return {
    ...state,
    counter: state.counter - 1
  };
}
