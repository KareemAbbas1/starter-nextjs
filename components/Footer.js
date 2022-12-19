import React from 'react';
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
  }
  @media(max-width: 600px) {
      flex-direction: column;
      padding-inline: 1rem;
      padding-bottom: 1rem;
      position: relative;
      bottom: 0;
      left: 0;
  }



    div.newsletter-container {
        width: 33%;
        margin-top: -3.5rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        @media(max-width: 600px) {
            width: 100%;
            margin-top: 0;
            font-size: 0.8rem;
            h4 {
                margin-bottom: 0.5rem;
            }
        }
        

        div.newsletter {
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
        /* box-sizing: border-box; */
        object-fit: contain;
        @media(max-width: 990px) {
            width: 5rem;
            margin-top: 4rem;
        }
        @media(max-width: 600px) {
            width: 3rem;
            display: inline;
            margin: 0;
            position: absolute;
            /* float: bottom; */
            /* margin-top: 8.3rem; */
            right: 1rem;
            bottom: -4.5rem;
        }
    }

    div.icons-container {
      width: 33%;
      color: #fff;
      margin-top: -3.5rem;
      @media(max-width: 990px) {
        margin-top: -2.7rem;
      }
      @media(max-width: 600px) {
          width: 100%;
          margin-top: 0rem;
          h4 {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
          }
      }

      div.icons {
        width: 100%;
        display: flex;
        height: auto;
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
  return (
    <Container>
      <div className='newsletter-container'>
        <h4>Subscribe to get our latest Offers</h4>
        <div className='newsletter'>
          <input type='email' />
          <button><h4>Subscribe</h4></button>
        </div>
      </div>

      <div className='image-container'>
        <Image src={Logo2} alt='logo' layout='responsive' />
      </div>

      <div className='icons-container'>
        <h4>Follow Us</h4>
        <div className='icons'>
          <div className='icon'>
            <Link href='https://facebook.com'>
              <a target="_blank"><Facebook size={25} color='#ffff' /></a>
            </Link>
          </div>
          <div className='icon'>
            <Link href='https://instagram.com'>
              <a target="_blank"><Instagram size={25} color='#ffff' /></a>
            </Link>
          </div>
          <div className='icon'>
            <Link href="https://youtube.com">
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