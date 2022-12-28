import React from 'react';
import styled from 'styled-components';


const Loading = styled.div`
    position: ${props => props.position === "fixed" ? "fixed" : `${props.position}`};
    width: 100%;
    top: ${(props) => props.align === "top" && 0};
    bottom: ${(props) => props.align === "bottom" && 0};
    left: 0;
    z-index: 1000;

    div {
        width: 100%;
        padding-block: 1px;
        border-radius: 5px;
        background: rgba(242,102,48, 0.2); // #F26630

        div.percentage {
            position: relative;
            height: 3px;
            border-radius: 5px;
            background: #F26630;
            animation: animate 1s linear infinite;
            
            @keyframes animate {
                0% {
                    width: 0;
                    left: 0;
                }
                50% {
                    width: 100%;
                    left: 0;
                }
                100% {
                    width: 0;
                    left: 100%;
                }
            }
        }

    }
`
const LoadingBar = ({ align, position }) => {
  return (
    <Loading position={position} align={align} >
        <div>
            <div className='percentage'></div>
        </div>
    </Loading>
  )
}

export default LoadingBar