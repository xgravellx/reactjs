import styled from "styled-components";

export const Styled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr) repeat(3, 0);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-content: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    margin-top: 1.5rem;
`