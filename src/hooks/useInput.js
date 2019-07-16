import {useState} from "react";

export const useInput = (defaultValue = "") => {

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return [inputValue, handleInputChange, setInputValue]

}
