import styled from "styled-components";


export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    padding-block: 6rem;
    padding-inline: 12vw;
    direction: ${({ language }) => language === "English" ? "ltr" : "rtl"};
    font-size: ${({ language }) => language === "English" ? "1.1rem" : "1.3rem"};
    line-height: 2.5rem;

    h3 {
        margin-inline: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
    }

    h4 {
        margin-inline: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px dashed #ccc;
    }

    p {
        padding-inline: 3rem;
    }

    @media(max-width: 992px) {
        padding-inline: 1rem;
    }

    @media(max-width: 600px) {
        h3 {
            margin-inline: 0;
        }

        h4 {
            margin-inline: 1rem;
        }

        p {
            padding-inline: 0;
        }
    }
`