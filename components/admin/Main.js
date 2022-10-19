import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    div.header{
        /* min-height: 20vh; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        div {
            width: 23.5%;
            height: 12vh;
            box-shadow: 1px 1px 1px 1px #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 300ms ease-in-out;
            cursor: pointer;

            &:hover {
                transform: translateY(-8px);
            }
        }
    }
    div.secondary{
        height: 80vh;
        padding-top: 2rem;
        margin-inline: 1rem;
        margin-bottom: 1rem;
        display: flex;
        gap: 1rem;

        div.progress {
            width: 35%;
            height: 100%;
            box-shadow: 1px 1px 1px 2px #ccc;
            border-radius: 5px;
            padding-inline: 1rem;
        }

        div.chart {
            width: 65%;
            height: 100.7%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: scroll;
            
            div.chart-item {
                width: 98%;
                max-height: 41.5%;
                margin-top: 1px;
                margin-inline-start: 1px;
                border-radius: 5px;
                padding-block: 1rem;
                box-shadow: 1px 1px 1px 2px #ccc;
                display: flex;
                justify-content: space-between;

                div{
                    width: 100%;
                    padding-inline: 1rem;
                }
            }
        }
    }
`

const Main = () => {
    return (
        <Container>
            {/* <div className="header">
                <div>حجوزات رحلات جديدة</div>
                <div>حجوزات مخيمات جديدة</div>
                <div>البريد</div>
                <div>واتسآب</div>
            </div> */}
            <div className="secondary">
                <div className="progress">
                    <h3>الإرادات</h3>
                    <CircularProgressbar
                        value={60}
                        text={"60%"}
                        strokeWidth={2}
                        styles={{
                            path: {
                                stroke: "#000"
                            },
                            text: {
                                fill: '#000'
                            }
                        }}
                    />
                    <h4>مستحقات الرحلات</h4>
                    <h4>مستحقات المخيمات</h4>
                </div>
                <div className="chart">
                    <div className="chart-item">
                        <div>
                            <h4>مستحقات ماهر كامب لشهر سبتمبر:</h4>
                            <h5>عدد الحجوزات:</h5>
                            <h5>إجمالي الإرادات:</h5>
                            <h5>نسبة الشركة:</h5>
                        </div>
                        <CircularProgressbar
                            value={60}
                            text={"60%"}
                            strokeWidth={2}
                            styles={{
                                path: {
                                    stroke: "#000"
                                },
                                text: {
                                    fill: '#000'
                                }
                            }}
                        />
                    </div>
                    <div className="chart-item">
                        <div>
                            <h4>مستحقات سبايسي كامب لشهر سبتمبر:</h4>
                            <h5>عدد الحجوزات:</h5>
                            <h5>إجمالي الإرادات:</h5>
                            <h5>نسبة الشركة:</h5>
                        </div>
                        <CircularProgressbar
                            value={60}
                            text={"60%"}
                            strokeWidth={2}
                            styles={{
                                path: {
                                    stroke: "#000"
                                },
                                text: {
                                    fill: '#000'
                                }
                            }}
                        />
                    </div>
                    <div className="chart-item">
                        <div>
                            <h4>مستحقات سبايسي كامب لشهر سبتمبر:</h4>
                            <h5>عدد الحجوزات:</h5>
                            <h5>إجمالي الإرادات:</h5>
                            <h5>نسبة الشركة:</h5>
                        </div>
                        <CircularProgressbar
                            value={60}
                            text={"60%"}
                            strokeWidth={2}
                            styles={{
                                path: {
                                    stroke: "#000"
                                },
                                text: {
                                    fill: '#000'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Main