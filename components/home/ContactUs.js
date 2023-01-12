import styled from 'styled-components';
import { GeoAltFill, TelephoneFill, Envelope } from 'react-bootstrap-icons';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBar from '../LoadingBar';



const Container = styled.div`
    max-width: 100vw;
    height: 80vh;
    padding-inline: 3rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    // 19 inch
    @media(min-width:1440px) {
        padding-inline: 5rem;
    }

    // 22 inch
    @media(min-width: 1680px) {
        padding-inline: 10%;
    }

    @media(max-width: 990px) {
        height: 40vh;
    }
    @media(max-width: 600px) {
        height: 100vh;
        flex-direction: column;
        padding-inline-start: ${({ language }) => language === "English" ? "1rem" : "2rem"};
        padding-inline-end: ${({ language }) => language === "العربية" ? "1rem" : "2rem"};
    }

    div.contact-info {
        width: 30%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
        text-align: ${({ language }) => language === "English" ? "left" : "right"};
        @media(max-width: 990px) {
            width: 40%;
        }
        @media(max-width: 600px) {
            width: 100%;
        }

        p {
            font-size: 0.9rem;
            line-height: 1.1rem;
        }

        h4 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        div {
            width: fit-content;
            display: flex;
            flex-direction: ${({ language }) => language === "English" ? "row" : 'row-reverse'};
            justify-content: space-between;
            align-items: flex-start;

            p {
                margin: 0px;
                margin-bottom: 20px;
                margin-inline: 10px;
            }
        }

    }

    div.form-container {
        width: 60%;
        height: 50%;
        @media(max-width: 990px) {
            width: 50%
        }
        @media(max-width: 600px) {
            width: 100%;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
            

            label {
                margin-bottom: 0.5rem;
            }

            input {
                width: 100%;
                margin-bottom: 1rem;
                padding: 0.6rem;
                text-align: ${({ language }) => language === "English" ? "left" : "right"};
            }

            textarea {
                width: 100%;
                height: 10rem;
                font-family: inherit;
                padding: 12px 0.6rem;
                resize: none;
                font-size: 1rem;
                margin-bottom: 1.5rem;
                text-align: ${({ language }) => language === "English" ? "left" : "right"};
                @media(max-width: 990px) {
                    height: 7rem;
                }
            }

            button {
                padding: 0.6rem;
                width: 10rem;
                font-size: 1.1rem;
                font-weight: bold;
                background-color: #F26630;
                color: #fff;
                border: 1px solid #F26630;
                transition: all 500ms ease-in-out;
                cursor: pointer;

                &:hover {
                    background-color: transparent;
                    color: #000;
                }
            }
        }
    }


    div.message-sent {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;

        div {
            width: 10rem;
            height: 10rem;
            border: 1px solid #F26630;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #F26630;
        }

        button {
            padding: 0.4rem;
            font-weight: bold;
            background-color: #F26630;
            color: #fff;
            border: 1px solid #F26630;
            transition: all 300ms ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: transparent;
                color: #000;
            }
        }
    }
`

const ContactUs = ({ language, showSideButtons }) => {

    const [loading, setLoading] = useState(false);

    // Handle contact form
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

    async function onFormSubmit(values) {
        try {
            setLoading(true);
            await axios.post(`/api/submit-contact-form`, {
                language: language,
                name: values.senderName,
                email: values.senderEmail,
                message: values.message
            });
            reset();
            setMessageSent(true);
            setLoading(false);
        }
        catch (error) {
            typeof window !== "undefined" && console.log(error);
        }
    };

    // handle message sent
    const [messageSent, setMessageSent] = useState(false);
    useEffect(() => {
        if (messageSent === true) {
            setTimeout(() => {
                setMessageSent(false)
            }, 7000)
        }
    }, [messageSent]);


    return (
        <Container id='contact-us-section' language={language}>

            {
                messageSent === true
                    ?
                    <div className='message-sent'>
                        <div>&#10003;</div>
                        <p>
                            {
                                language === "English"
                                    ? "Your message has been sent successfully."
                                    : ".تم إرسال رسالتك بنجاح"
                            }
                        </p>
                        <button onClick={() => setMessageSent(false)}>
                            {
                                language === "English"
                                    ? "Send another message"
                                    : "إرسالة رسالة أخرى"
                            }
                        </button>
                    </div>
                    :
                    <>

                        {
                            showSideButtons &&
                            <div className='contact-info'>
                                <h2>
                                    {
                                        language === "English"
                                            ? "Send us a message"
                                            : "ارسل إلينا"
                                    }
                                </h2>

                                <p>
                                    {
                                        language === "English"
                                            ? "The customer service department is available to you throughout the day at any time to answer all inquiries. If you are within an organization or an entity, a trip will be carried out entirely for you."
                                            : "قسم خدمه العملاء متاح لك علي مدار اليوم في أي وقت للاجابه علي جميع الاستفسارات واذا كنت ضمن هيئه أو جهه سيتم تنفيذ رحلة بالكامل خاصه بك"
                                    }
                                </p>

                                <h4>
                                    {
                                        language === "English"
                                            ? "Book Your Trip"
                                            : "احجز رحلتك معنا"
                                    }
                                </h4>

                                <div>
                                    <GeoAltFill />
                                    <p>
                                        {
                                            language === "English"
                                                ? "Sinai, Egypt"
                                                : "سيناء, مصر"
                                        }

                                    </p>
                                </div>
                                <div>
                                    <TelephoneFill size={15} />
                                    <p>+20-106-228-1881</p>
                                </div>
                                <div>
                                    <Envelope size={17} />
                                    <p>breaktrips2022@gmail.com</p>
                                </div>
                            </div>
                        }

                        <div className='form-container'>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <label htmlFor='name'>
                                    {
                                        language === "English"
                                            ? "Name*"
                                            : "*الاسم"
                                    }
                                </label>
                                <input
                                    type='text'
                                    id='sender-name'
                                    name='sender-name'
                                    placeholder={
                                        language === "English"
                                            ? "Enter your full name"
                                            : " ادخل الإسم الكامل"
                                    }
                                    {...register("senderName", {
                                        required: {
                                            value: true,
                                            message: language === "English"
                                                ? "Please enter your name"
                                                : "برجاء ادخال الاسم الكامل"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: language === "English"
                                                ? "This name is too short"
                                                : "هذا الاسم قصير جدا"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: language === "English"
                                                ? "This name is too long"
                                                : "هذا الاسم طويل جدا"
                                        }
                                    })}
                                />
                                {
                                    errors.senderName && <span style={{
                                        color: "red"
                                    }}>
                                        {errors.senderName.message}
                                    </span>
                                }

                                <label htmlFor='email'>
                                    {
                                        language === "English"
                                            ? "Email*"
                                            : "*البريد الاكتروني"
                                    }
                                </label>
                                <input
                                    type='email'
                                    id='sender-email'
                                    name='sender-email'
                                    placeholder={
                                        language === "English"
                                            ? "Enter your email"
                                            : "ادخل البريد الالكتروني"
                                    }
                                    {...register("senderEmail", {
                                        required: {
                                            value: true,
                                            message: language === "English"
                                                ? "Please enter your email address"
                                                : "من فضلك ادخل بريدك الألكتروني"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: language === "English"
                                                ? "This email is too short"
                                                : "هذا البريد الإلكتروني قصير جدا"
                                        },
                                        maxLength: {
                                            value: 254,
                                            message: language === "English"
                                                ? "This email is too long"
                                                : "هذا البريد الإلكتروني طويل جدا"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: language === "English"
                                                ? "Please enter a valid email address"
                                                : "برجاء إدخال عنوان بريد إلكتروني صحيح"
                                        }
                                    })}
                                />
                                {
                                    errors.senderEmail && <span style={{
                                        color: 'red'
                                    }}>
                                        {errors.senderEmail.message}
                                    </span>
                                }

                                <label htmlFor='message'>
                                    {
                                        language === "English"
                                            ? "Message*"
                                            : "*الرسالة"
                                    }
                                </label>
                                <textarea
                                    type='textarea'
                                    id='message'
                                    name='message'
                                    placeholder={
                                        language === "English"
                                            ? "Enter your message"
                                            : "اكتب رسالتك"
                                    }
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: language === "English"
                                                ? "Please enter your message"
                                                : "من فضلك اكتب رسالتك"
                                        }
                                    })}
                                />
                                {
                                    errors.message && <span style={{
                                        color: 'red'
                                    }}>
                                        {
                                            errors.message.message
                                        }
                                    </span>
                                }
                                {
                                    loading &&
                                    <LoadingBar position="relative" align="top" />
                                }

                                <button type="submit">
                                    {
                                        language === "English"
                                            ? "Send Message"
                                            : "ارسل"
                                    }
                                </button>
                            </form>
                        </div>
                    </>
            }
        </Container>
    )
}

export default ContactUs