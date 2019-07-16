import {keyBy, set, values} from "lodash/fp";
import {useReducer}         from "react";

export const useTodoReducer = () => {

  const initialState = [
    {id: 1, text: 'Exercise more', completed: true},
    {id: 2, text: 'Spend less', completed: false},
    {id: 3, text: 'Read more', completed: false},
    {id: 4, text: 'Learn React hooks', completed: false},
  ];

  const reducer = (state, action) => {
    const {type, id, text} = action;
    switch (type) {
      case 'complete':
        return values(set([id, 'completed'], true, keyBy('id', state)));
      case 'delete':
        return state.filter(item => item.id !== id);
      case 'create':
        return [...state, {id: new Date(), text: text, completed: false}];
      default:
        return state;
    }
  };

  return useReducer(reducer, initialState);

}
