import styled from "styled-components";
import { useState } from "react";

const RadioItem = ({ title, category, updateFilter }) => {
  const [ selectedOption, setSelectedOption ] = useState(null)

  const handleOnChange = (e) => {
    updateFilter(e);
    setSelectedOption(e.target.value)
  }

  return ( 
    <RadioItemStyled>
      <h3 className="title">{title}</h3>
      {category.map((item, i) => (
        <label key={i}>
          <input 
            type="radio"
            name={title} 
            id={title} 
            value={item}
            checked={selectedOption === item}
            onChange={handleOnChange}
            /> {item}
        </label>
      ))}
    </RadioItemStyled>
   );
}
 
export default RadioItem;

const RadioItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 2rem;
  & .title {
    text-transform: uppercase;
  }
`;