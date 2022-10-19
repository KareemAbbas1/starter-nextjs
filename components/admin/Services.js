import { useState, useEffect } from "react";
import styled from "styled-components";




const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0%;

    div.header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 1rem;
        border-bottom: 1px solid #ccc;


        button {
            margin-top: 1.1rem;
            font-size: 1.1rem;
            font-weight: bold;
            padding-block: 0.4rem;
            background-color: transparent;
            color: #000;
            border: 2px solid #ccc;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                background-color: #000;
                color: #fff;
                border-color: #000;
            }
        }


        .active {
            button {
                background-color: #000;
                color: #fff;
                border-color: #000;

                &:hover {
                    background-color: transparent;
                    color: #000;
                }
            }
        }
    }

    
    div.tabs-container {
        div.tab {
            display: none;
        }
    }
`

const Services = ({ language }) => {

    const [toggleActiveTab, setToggleActiveTab] = useState(1);

    return (
        <Container>
            <div className="header">

                <div className={toggleActiveTab === 1 ? "active" : "not-active"}>
                    <button onClick={() => setToggleActiveTab(1)
                    }>
                        افضل الوجهات
                    </button>
                </div>

                <div className={toggleActiveTab === 2 ? "active" : "not-active"}>
                    <button onClick={() => setToggleActiveTab(2)
                    }>
                        سيارات للايجار
                    </button>
                </div>

            </div>

            <div className="tabs-container">

                <div className={toggleActiveTab === 1 ? "active-tab" : "tab"}>
                    tab 1
                </div>

                <div className={toggleActiveTab === 2 ? "active-tab" : "tab"}>
                    tab 2
                </div>

            </div>
        </Container>
    )
}

export default Services