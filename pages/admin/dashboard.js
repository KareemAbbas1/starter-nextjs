import axios from "axios";
import { Container } from "../../components/admin/Dashboard";
import { useEffect, useState } from "react";
import Main from "../../components/admin/Main";
import Trips from "../../components/admin/Trips";
import Camps from "../../components/admin/Camps";
import Rooms from "../../components/admin/Rooms";
import Users from "../../components/admin/Users";
import Profile from "../../components/admin/Profile";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import Services from "../../components/admin/Services";



export const getServerSideProps = async (req) => {
    const token = req.req.cookies.token;
    let role;

    const userRole = () => {
        let decode;
        try {
            decode = jwt.verify(token, process.env.JWT_SECRET)
        }
        catch (error) {
            console.error(error)
        }

        role = decode && decode.role;
    }
    userRole()


    if (token === null || token === undefined) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        }
    }

    try {

        const res1 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/camps`);
        const res2 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/admin/campsOrders`, {
            headers: {
                'Cookie': `token=${token}`
            }
        });
        const res3 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/admin/tripsOrders`, {
            headers: {
                'Cookie': `token=${token}`
            }
        });

        return {
            props: {
                camps: res1.data,
                campsOrders: res2.data,
                tripsOrders: res3.data,
                role: role
            }
        };
    }
    catch (error) {
        console.log(error)
        return {
            notFound: true,
        }
    }
};


const Dashboard = ({ language, camps, campsOrders, tripsOrders, role }) => {

    const router = useRouter();

    const [toggleActiveTab, setToggleActiveTab] = useState(1);
    const [user, setUser] = useState(null);

    const [newCampsOrders, setNewCampsOrders] = useState(false);
    const [newCampsordersList, setNewCampsOrdersList] = useState([]);

    const [newTripsOrders, setNewTripsOrders] = useState(false);
    const [newTRipsOrdersList, setNewTripsOrdersList] = useState(false);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const userData = JSON.parse(localStorage.getItem("user"));
            setUser(userData);
        }
    }, []);



    /* Handle notification */
    //-- Camps orders notifications
    useEffect(() => {
        const checkForNewCampsOrders = () => {
            if (
                campsOrders.length > 0 &&
                (
                    campsOrders[0].new === true
                    || campsOrders[1].new === true
                    || campsOrders[2].new === true
                )
            ) {
                setNewCampsOrders(true);

                const newOrdersList = campsOrders.filter(order => {
                    return order.new === true
                });
                setNewCampsOrdersList(newOrdersList);
            }
        };


        const checkForNewTripsOrders = () => {
            if (
                tripsOrders.length > 0 &&
                (
                    tripsOrders[0].new === true
                    || tripsOrders[1].new === true
                    || tripsOrders[2].new === true
                )
            ) {
                setNewTripsOrders(true)

                const newOrdersList = tripsOrders.filter(order => {
                    return order.new === true
                });
                setNewTripsOrdersList(newOrdersList);
            }
        };

        
        checkForNewCampsOrders();
        checkForNewTripsOrders();

    }, [campsOrders, tripsOrders]);

    /* End Handle notification */


    // Handle Logout
    let expireDate = new Date;
    let yesterday = expireDate.getDate() - 1;
    expireDate.setDate(yesterday);

    const logout = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/auth/logout`);
            localStorage.removeItem("user");
            setUser(null);
            router.push("/admin/login");
        }
        catch (error) {
            console.error("Error", error && error.response.data.message)
        }
    };

    setTimeout(() => {
        logout();
    }, 1000 * 60 * 60 * 7);

    return (
        <Container>
            <div className="side-bar">
                <div className="tabs">
                    <h4>الرئيسية</h4>
                    <div className={toggleActiveTab === 1 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(1)
                        }>
                            <h5>
                                لوحة التحكم
                            </h5>
                        </button>
                    </div>


                    <h4>القائمة</h4>

                    <div className={toggleActiveTab === 2 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => {
                            setToggleActiveTab(2);
                            setNewTripsOrders(false);
                        }}>
                            <h5>
                                الرحلات
                                {
                                    newTripsOrders &&
                                    <span className="notification">
                                        {newTRipsOrdersList.length} {
                                            newTRipsOrdersList.length > 10 || newTRipsOrdersList.length <= 2
                                                ? "حجز جديد"
                                                : "حجوزات جديدة"
                                        }
                                    </span>
                                }
                            </h5>
                        </button>
                    </div>

                    <div className={toggleActiveTab === 3 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => {
                            setToggleActiveTab(3);
                            setNewCampsOrders(false)
                        }}>
                            <h5>
                                المخيمات
                                {
                                    newCampsOrders &&
                                    <span className="notification">
                                        {newCampsordersList.length} {
                                            newCampsordersList.length > 10 || newCampsordersList.length <= 2
                                                ? "حجز جديد"
                                                : "حجوزات جديدة"
                                        }
                                    </span>
                                }
                            </h5>
                        </button>
                    </div>

                    <div className={toggleActiveTab === 4 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(4)}>
                            <h5>
                                الغرف
                            </h5>
                        </button>
                    </div>
                    {
                        user && user.role === "admin1" &&
                        <div className={toggleActiveTab === 5 ? 'tab active-tab' : 'tab'}>
                            <button onClick={() => setToggleActiveTab(5)}>
                                <h5>
                                    المستخدمين
                                </h5>
                            </button>
                        </div>
                    }


                    <div className={toggleActiveTab === 6 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(6)}>
                            <h5>
                                الخدمات
                            </h5>
                        </button>
                    </div>

                    <h4>قائمة المستخدم</h4>
                    <div className={toggleActiveTab === 7 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(7)}>
                            <h5>
                                الملف الشخصي
                            </h5>
                        </button>
                    </div>
                    <div className='tab'>
                        <button onClick={logout}>
                            <h5>
                                تسجيل الخروج
                            </h5>
                        </button>
                    </div>
                </div>
            </div>

            <div className="main-body">
                <div className="tabs-content">
                    <div className={toggleActiveTab === 1 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Main />
                    </div>
                    <div className={toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Trips language={language} newTRipsOrdersList={newTRipsOrdersList} />
                    </div>
                    <div className={toggleActiveTab === 3 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Camps camps={camps} language={language} newCampsordersList={newCampsordersList} />
                    </div>
                    <div className={toggleActiveTab === 4 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Rooms camps={camps} />
                    </div>
                    <div className={toggleActiveTab === 5 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Users role={role} loggedInUser={user} />
                    </div>

                    <div className={toggleActiveTab === 6 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Services />
                    </div>

                    <div className={toggleActiveTab === 7 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <Profile user={user} />
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Dashboard;