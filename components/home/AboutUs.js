import Image from 'next/image';
import styled from 'styled-components';
import Logo from '../../public/circleLogo.png';

const Container = styled.div`
    max-width: 100vw;
    max-height: fit-content;
    background-color: #16171F;
    color: #fff;
    padding-block: 5rem;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 3rem;

    h1 {
        padding-bottom: 1rem;
        border-bottom: 1px solid #F26630;
    }

    div.image {
        display: block;
        width: 15rem;
        height: 15re;
    }

    p {
        font-size: 1.15rem;
        line-height: 1.6rem;
        padding-inline: 1rem;

        @media(min-width: 1680px){
            padding-inline: 25vw;
        }

        @media(min-width: 1366px) and (max-width: 1460px) {
            padding-inline: 15vw;
        }

        @media(min-width: 540px) and (max-width: 992px) {
            padding-inline: 2rem;
        }
    }

    @media(min-width: 200px) and (max-width: 1280px) {
        div.image {
            width: 12rem;
            height: 12rem;
        }
    }
`


const AboutUs = ({ language }) => {
    return (
        <Container id='aboutus-section' language={language}>
            <h1>
                {
                    language === "English"
                    ? "About us"
                    : "عن الشركة"
                }
            </h1>
            <div className='image'>
                <Image layout='responsive' src={Logo} alt="Company Logo" />
            </div>
            <p>
            {
                language === "English"
                ? "A travel and tourism company, its first goal is to create a new concept of travel, trips, and access to any place in the world with the easiest steps and the most comfortable and easy way. Break Travel and Tours seeks to provide the best services and offers using the latest technological methods. Break Travel and Tours seeks to develop its services, and creating a better quality of communication with its customers through its website, or by contacting the customer service center that operates around the clock (24/7), dedicated to facilitating the booking process with Break for travel and trips in addition to after-sales service."
                : "شركة سياحة و سفر، هدفها الأول خلق مفهوم جديد للسفر و الرحلات و الوصول لأي مكان في العالم ، بأسهل الخطوات و أكثر الطرق راحة وسهولة ، كما تسعى شركة بريك للسفر والرحلات لتقديم أفضل الخدمات و العروض بإستخدام أحدث الأساليب التكنولوجية .تسعى شركة بريك للسفر والرحلات لتطوير خدماتها ، و خلق جودة أفضل للتواصل مع عملائها و ذلك من خلال موقعها الإلكتروني ، أو من خلال الإتصال بمركز خدمة العملاء الذي يعمل على مدار الساعة (24/7) ، المخصص لتسهيل عملية الحجز مع بريك للسفر والرحلات بالإضافة إلى خدمة ما بعد البيع ."
            }
            </p>
        </Container>
    )
}

export default AboutUs
