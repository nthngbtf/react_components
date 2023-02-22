import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const SET_VALUE_ADD = "setvaluetoadd";
const DECREMENT_COUNT = "decrement";
const ADDING_VALUE = "addingvalue";

const reducerCounter = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case SET_VALUE_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADDING_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      // return state;
      throw new Error("Unexpected Action type" + action.type);
  }
  // if (action.type === INCREMENT_COUNT) {
  // return {
  //   ...state,
  //   count: state.count + 1,
  // };
  // }
  // if (action.type === SET_VALUE_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  // if (action.type === DECREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }
  // return state;
};

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispath] = useReducer(reducerCounter, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispath({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispath({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispath({
      type: SET_VALUE_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispath({
      type: ADDING_VALUE,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-100 border border-gray-300"
        />
        <Button type="submit">Add It</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
