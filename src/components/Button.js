import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.0rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    background-image: linear-gradient(to right, rgba(140,50,240,1), rgba(231,53,135,1));
    border-color: ${props => 
        props.cart ? "var(--mainYellow)" : "var(--realWhite)"};
    color: ${props =>
        props.cart ? "var(--mainYellow)" : "var(--realWhite)"};
    border-radius: 0.5rem;
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${prop => 
            prop.cart? "var(--purp)" : "var(--purp)"};
        color: var(--purp);
    }
    
    &:focus {
        outline: none;  
    }
`
;