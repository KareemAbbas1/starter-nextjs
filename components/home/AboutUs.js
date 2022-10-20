import Image from 'next/image';
import styled from 'styled-components';



const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    padding-block: 5rem;
    padding-inline-start: ${({ language }) => language === "English" && "4rem"};
    padding-inline-end: ${({ language }) => language === "العربية" && "4rem"};
    background-color: #16171F;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    display: flex;
    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    justify-content: space-between;
    align-items: center;
    @media(max-width: 990px) {
        height: 50vh;
        padding-block: 2rem;
    }
    @media(max-width: 600px) {
        height: 100vh;
        padding-block: 1.5rem;
        padding-inline-start: 2.3rem;
        padding-inline-end: 0;
    }


    div.text {
        width: 45%;
        height: 90%;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
        text-align: ${({ language }) => language === "العربية" && "right"};
        @media(max-width: 990px) {
            width: 100%;
            padding-inline-end: ${({ language }) => language === "English" && '3rem'};
            padding-inline-start: ${({ language }) => language === "العربية" && '3rem'};
        }
        @media(max-width: 600px) {
            width: 100%;
            height: 100%;
            padding-inline-end: 3rem;
            padding-inline-start: unset;
        }

        h1 {
            width: 9rem;
        }

        p {
            font-size: 1.15rem;
            line-height: 1.6rem;
            position: relative;

            span.h-line {
                width: 11rem;
                height: 15rem;
                position: absolute;
                top: -1rem;
                left: ${({ language }) => language === "English" && "-1.5rem"};
                right: ${({ language }) => language === "العربية" && "-1.5rem"};
                border-top: 2px solid #F26630;
                border-left: ${({ language }) => language === "English" && "2px solid #F26630"};
                border-right: ${({ language }) => language === "العربية" && "2px solid #F26630"};
            }
        }

        @media(max-width: 600px) {

            h1 {
                width: fit-content;
                font-size: 1.2rem;
            }

            p {
                font-size: 0.7rem;
                margin-top: 1rem;
            }
        }
    }

    div.image {
        width: 42%;
        height: 90%;
        position: relative;
        @media(max-width: 990px) {
            display: none;
        }

        img {
            width: 100%;
            height: 100%;
            position: absolute;
            display: block;
            z-index: 10;
        }

        div {
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: -0.5%;
            right: ${({ language }) => language === "English" && "-25%"};
            left: ${({ language }) => language === "العربية" && "-25%"};
            background-color: #F26630;
        }
    }

    @media(min-width: 1400px) {
        padding-inline-start: ${({ language }) => language === "English" && "15rem"};
        padding-inline-end: ${({ language }) => language === "العربية" && "15rem"};

        div.text {
            width: 40%;
        }

        div.image {
            width: 50%;
        }
    }
`

const AboutUs = ({ language }) => {
    return (
        <Container id='aboutus-section' language={language}>
            <div className='text'>
                <h1>
                    {
                        language === "English"
                        ? "About Us"
                        : "عن الشركة"
                    }
                </h1>
                <p>
                    <span className='h-line' />
                    {
                        language === "English"
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Vitae elementum curabitur vitae nunc sed velit. Mattis enim ut tellus elementum. Interdum varius sit amet mattis vulputate enim nulla aliquet. Adipiscing tristique risus nec feugiat. Dolor magna eget est lorem ipsum dolor sit. Sit amet nisl purus in mollis nunc sed id. At risus viverra adipiscing at in tellus integer feugiat. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Vitae elementum curabitur vitae nunc sed velit. Mattis enim ut tellus elementum. Interdum varius sit amet mattis vulputate enim nulla aliquet. Adipiscing tristique risus nec feugiat. Dolor magna eget est lorem ipsum dolor sit. Sit amet nisl purus in mollis nunc sed id. At risus viverra adipiscing at in tellus integer feugiat. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit."
                        : "كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي. و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة علي الجانب الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي المحتم، واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة لضعف إرادتهم فيتساوي مع هؤلاء الذين يتجنبون وينأون عن تحمل الكدح والألم ."
                    }
                    
                </p>
            </div>
            <div className='image'>
                <div />
                <Image layout='fill' src='https://i.postimg.cc/15CSr0nc/image-3.jpg' alt='' />
            </div>
        </Container>
    )
}

export default AboutUs