import styled from "styled-components";

export const Styled = styled.div`
button {
    width: 3em;
    height: 3em;
    font-size: 1.5em;
    border: none;
    border-radius: 2em;
    margin: 0.3em;
}

button:hover {
    cursor: pointer;
}

.wrapper {
    background-color: black;
    border-radius: 1em;
    padding: 1em;
}

.orange {
    background-color: #FF9500;
    color: white;
}

.grey {
    background-color: #505050;
    color: white;
}

.resultado {
    color: white;
    display: flex;
    justify-content: flex-end; /* Ou 'right' = o resultado seria o mesmo */
    margin-right: 1em;
    font-size: 3.5em;
}
`