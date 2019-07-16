import React            from 'react';
import styled           from 'styled-components';
import {useInput}       from "../hooks/useInput";
import {isEmpty}        from "lodash/fp";
import {useTodoReducer} from "../hooks/todoReducer";

export const List = () => {
  const [inputValue, handleInputChange, setInputValue] = useInput();
  const [state, dispatch] = useTodoReducer();

  return(
    <div>
      <ListContainer>
        {state && state.map(item=> <ListItem key={item.id}>
          <span className={`item-text ${item.completed && 'completed'}`}>{item.text}</span>
          <span className="item-completed-btn"><Button className={item.completed && 'disable'} onClick={()=> dispatch({type: 'complete', id: item.id})}>completed</Button></span>
          <span className="item-delete-btn"><Button onClick={()=> dispatch({type: 'delete', id: item.id})}>delete</Button></span>
        </ListItem>)}
      </ListContainer>

      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <Button className={isEmpty(inputValue) && 'disable'}
        onClick={() => {
        !isEmpty(inputValue) && dispatch({type: 'create', text: inputValue});
        setInputValue("");
      }}>create new</Button>
    </div>
  )
}

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListItem = styled.li`
    display: flex;
    width: 50%;
    
    .item-text{
      text-align: left;
      flex-grow: 2;
      
      &.completed{
       text-decoration: line-through;
      }
    }
`;

const Button = styled.button`
text-transform: uppercase;
cursor: pointer;
 border-radius: 10px;
   background-color: #ec7b7b;
 color: white;
 padding: 5px 15px;
 line-height: 1.5;
 margin-left: 10px;
 
 &:hover{
   background-color: #e54c4c;
 }
 
 &:focus{
 outline: 0;
 border: 0;
 }
 
 
 &.disable{
  background-color: darkgray;
  cursor: not-allowed;
 }
`;
