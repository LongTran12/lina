import React from 'react'
import styled from 'styled-components'

export default function ContactMails() {
    return (

        <Wrap>
            <h3>Send a Message</h3>
            <form>
                <input type="text" placeholder="Full Name" name="name" className="input-text" />
                <input type="email" placeholder="Your Email" name="email" className="input-text" />
                <textarea name="message" id="message" cols="30" rows="3">Your message</textarea>
                <p>
                    <input type="submit" value="Send Message" />
                </p>
            </form>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:50px;
    h3{
        font-weight:bold;
        font-size:30px;
        margin-bottom:30px;
    }
    form{
        display:flex;
        flex-flow:column;
        input,textarea{
            margin: 0;
            border: 1px solid #e3e3e3;
            width: 100%;
            padding:15px 30px;
            margin-bottom:25px;
            border-radius:5px;
        }
        textarea{
            border-radius:5px;
            margin-bottom:25px;
            
        }
        input[type="submit"]{
            margin-top:20px;
            display: inline-block;
            border-radius: 5px;
            color: #202020;
            width: auto;
            padding: 20px 40px;
            text-align: center;
            font-size: 14px;
            border: 0;
            text-transform: uppercase;
            font-weight: 600;
            border-left: 2px solid #32e9f9;
            border-right: 2px solid #03b6f9;
            background-image: linear-gradient(to right,#32e9f9,#03b6f9),linear-gradient(to right,#32e9f9,#03b6f9);
            background-size: 100% 2px;
            background-repeat: no-repeat;
            background-position: 0 0 , 1px 100%;
            background-color: transparent;
            :hover{
                outline: none;
                box-shadow: 0 5px 40px -5px rgba(47, 232, 249, 0.45), 0 5px 20px -5px rgba(21, 118, 230, 0.5);
                transform: translate3d(0, -2px, 0);
            }
        }
    }
`;
