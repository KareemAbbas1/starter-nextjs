import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        width: 20%;
        padding: 0.7rem 0.5rem;
        font-size: 1.2rem;
        border: 1px solid;
        border-radius: 5px;
    }

    button {
        width: 13%;
        padding-block: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        border: 1px solid #F26630;
        background-color: #F26630;
        color: #fff;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
            background-color: transparent;
            color: #000;
        }
    }
`