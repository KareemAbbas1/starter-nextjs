import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Logo2 from '../public/largeLogo2.png';
import { Facebook, Instagram, Youtube, Whatsapp } from 'react-bootstrap-icons';
import Link from 'next/link';


const Container = styled.div`
  max-width: 100vw;
  height: 40vh;
  margin: 0px;
  padding-inline-end: 3rem;
  padding-inline-start: 5rem;
  background-color: #16171F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fxied;
  bottom: 0;
  left: 0;

  // 15 inch 
  @media(max-width: 1366px) {
    height: 50vh;
  }
  // 19 inch
  @media(min-width: 1440px) {
      padding-inline: 5rem;
  }

  // 22 inch
  @media(min-width: 1680px) {
      padding-inline: 10%;
  }
  
  @media(max-width: 990px) {
      height: 30vh;
      padding-inline: 2rem;
    }

  @media(max-width: 600px) {
    height: 42vh;
    flex-direction: column;
    padding-inline: 1rem;
    padding-bottom: 1rem;
  }



    div.newsletter-container {
        width: 33%;
        margin-top: -3.5rem;
        color: #fff;
        display: flex;
        flex-direction: column;

        @media(min-width: 601px) and (max-width: 992px) {
          font-size: 0.8rem;
        }
        @media(max-width: 600px) {
            width: 100%;
            margin-top: 0;
            font-size: 0.8rem;
            text-align: center;
            h4 {
                margin-bottom: 0.5rem;
            }
        }
        

        form.newsletter {
            width: 100%;
            display: flex;
            align-items: center;

            input {
                width: 70%;
                padding: 0.8rem;
                margin: 0px;
                border: none;
                @media(max-width: 600px) {
                    padding: 0.5rem;
                }
            }

            button {
                width: 25%;
                padding: 0px;
                color: #fff;
                background-color: #F26630;
                border: none;
                border-color: #F26630;
                border-radius: 0%;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                transition: all 300ms ease-in-out;
                cursor: pointer;

                h4 {
                    padding: 0px;
                    margin: 0.8rem 0;
                    @media(max-width: 600px) {
                        margin: 0.54rem 0;
                    }
                }
            
                &:hover {
                    opacity: 0.8;
                }
            }

            @media(max-width: 990px) {
                button {
                    width: 30%;
                    padding: 1px 5px;

                    h4 {
                        font-size: 0.7rem;
                    }
                }
            }
        }

    }




    div.image-container {
        height: 9rem;
        width: 9rem;
        display: block;
        object-fit: contain;

        div.links-container {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          display: flex;
          flex-flow: column;
          align-items: center;
          gap: 1vh;
          padding-top: 2rem;

          a {
            color: #ccc;
            text-decoration: none;
            font-weight: 600;
            transition: all 300ms ease-in-out;

            :hover {
              transform: scale(1.05)
            }
          }

          @media(min-width: 992px) and (max-width: 1366px) {
            left: 2rem;
          } 
        }

        @media(max-width: 990px) {
            width: 5rem;
            margin-top: 4rem;
        }

        @media(max-width: 600px) {
            width: 4rem;
            height: auto;
            margin-bottom: 0;
            margin-top: 1rem;
        }
    }

    div.icons-container {
      width: 33%;
      color: #fff;
      margin-top: -3.5rem;
      @media(max-width: 990px) {
        margin-top: -2.7rem;
        font-size: 0.8rem;
      }
      @media(max-width: 600px) {
        width: 100%;
        margin-top: 3rem;
        text-align: center;
          h4 {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
          }
        }
        
        div.icons {
          width: 100%;
          display: flex;
          height: auto;

          @media(max-width: 600px) {
            align-items: center;
            justify-content: center;
          }
      }

      div.icon {
        width: 3.5rem;
                height: 3.5rem;
                background-color: #F26630;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-inline-end: 2rem;
                transition: all 300ms ease-in-out;
                cursor: pointer;
                a{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &:hover {
                    transform: translateY(-7px);
                    opacity: 0.8;
                }


                // 10 inch 
                @media(min-width: 1024px) {
                  width: 2.5rem;
                  height: 2.5rem;
                }
                
                // 12 inch
                @media(min-width: 1280px) {
                  transform: scale(1.25);
                }

                // 15 inch
                @media(min-width: 1366px) {
                  transform: scale(1.3);
                  margin-right: 2.5rem;
                }

                @media(max-width: 990px) {
                    width: 3rem;
                    height: 3rem;
                    margin-inline-end: 0.5rem;
                }
                @media(max-width: 600px) {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin-inline-end: 0.5rem;
                }
      }
    }
`

const Footer = () => {

  // Handle news letter
  const [isSubscribed, setIsSubscribed] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 1500)
  };


  return (
    <Container>
      <div className='newsletter-container'>
        <h4>Subscribe to get our latest Offers</h4>
        <form onSubmit={(e) => submit(e)} className='newsletter'>
          <input type='email' required />
          <button type='submit'><h4>Subscribe</h4></button>
        </form>
        {
          isSubscribed &&
          <span style={{ paddingTop: "1rem" }}>Thank you for subscribing</span>
        }
      </div>

      <div className='image-container'>
        <Image src={Logo2} alt='logo' layout='responsive' />

        <div className='links-container'>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>

      <div className='icons-container'>
        <h4>Follow Us</h4>
        <div className='icons'>
          <div className='icon'>
            <Link href='https://www.facebook.com/BreakTribs?mibextid=LQQJ4d'>
              <a target="_blank"><Facebook size={25} color='#ffff' /></a>
            </Link>
          </div>
          <div className='icon'>
            <Link href='https://www.instagram.com/break.trips/'>
              <a target="_blank"><Instagram size={25} color='#ffff' /></a>
            </Link>
          </div>
          <div className='icon'>
            <Link href="https://www.youtube.com/@breaktripscompany1967">
              <a target="_blank"><Youtube size={25} color='#ffff' /></a>
            </Link>
          </div>
          <div className='icon'>
            <Link href="https://web.whatsapp.com">
              <a target="_blank"><Whatsapp size={25} color='#ffff' /></a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer