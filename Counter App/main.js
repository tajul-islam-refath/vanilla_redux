// 1. Initialize a state for application
const initialState = {
  count: 1,
};

// 2. write action type to manage or update the state

// 2.1 inrement action: which incerement the count value by 1
const incerement = () => {
  return {
    // type property must have
    type: "Incerement",
    // additional property
    // payload : {}
  };
};

// 2.2 Decrement action: which Decrement the count value by 1
const decrement = () => {
  return {
    // type property must have
    type: "Decrement",
    // additional property
    // payload : {}
  };
};

// 3. Reducer is a function . The reducer receives two arguments, the current state and an action object describing what happened. (state = initialState, action) => newState;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Incerement":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// 4. create store using Redux.createStore . which take reducer as arguments (subscribe, dispatch , getState)
const store = Redux.createStore(counterReducer);

const countEl = document.getElementById("count");

const render = () => {
  const state = store.getState();
  console.log(state);
  countEl.innerHTML = state.count.toString();
};

render();
store.subscribe(render);

// increment by click
document.getElementById("inc").addEventListener("click", function () {
  store.dispatch(incerement());
});

// decrement by click
document.getElementById("dec").addEventListener("click", function () {
  store.dispatch(decrement());
});
