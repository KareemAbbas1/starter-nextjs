// import styled from "styled-components";
// import { useState } from "react";
// import CampsOrders from "./CampsOrders";
// import TripsOrders from "./TripsOrders";



// const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     margin: 0%;

//     div.header {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding-inline: 1rem;
//         border-bottom: 1px solid #ccc;
//     }

//     button {
//         margin-top: 1.1rem;
//         font-size: 1.1rem;
//         font-weight: bold;
//         padding-block: 0.4rem;
//         background-color: transparent;
//         color: #000;
//         border: 2px solid #ccc;
//         cursor: pointer;
//         transition: all 300ms ease-in-out;

//         &:hover {
//             background-color: #000;
//             color: #fff;
//             border: 2px solid #000;
//         }
//     }


//     .active {
//         background-color: #000;
//         color: #fff;
//         border: 2px solid #000;

//         &:hover {
//             background-color: transparent;
//             color: #000;
//         }
//     }


//     div.content-tabs {
//         div.tab {
//             display: none;
//         }
//     }
// `

// const Orders = ({ language }) => {

//     const [toggleActiveTab, setToggleActiveTab] = useState(1);

//     return (
//         <Container language={language}>
//             <div className="header">
//                 <button
//                     className={toggleActiveTab === 1 ? "active" : "not-active"}
//                     onClick={() => setToggleActiveTab(1)}
//                 >
//                     حجوزات المخيمات
//                 </button>

//                 <button
//                     className={toggleActiveTab === 2 ? "active" : "not-active"}
//                     onClick={() => setToggleActiveTab(2)}
//                 >
//                     حجوزات الرحلات
//                 </button>
//             </div>

//             <div className="content-tabs">
//                 <div className={toggleActiveTab === 1 ? "active-tab" : "tab"}>
//                     <CampsOrders language={language}/>
//                 </div>

//                 <div className={toggleActiveTab === 2 ? "active-tab" : "tab"}>
//                     <TripsOrders />
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Orders