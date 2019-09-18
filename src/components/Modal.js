import React from 'react'
import styled from 'styled-components'
import { IoIosClose as Close } from 'react-icons/io'

export default function Modal({ children, isClose }) {
    return (
        <WrapModal>
            <div className="modal-body">
                {children}
            </div>
            <div className="close-modal">
                <button onClick={isClose}><Close /></button>
            </div>
            <div className="wrap-close" onClick={isClose}></div>

        </WrapModal>

    );
}
const WrapModal = styled.div`
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:1103;
    .modal-body{
        z-index:1200;
    }
    .close-modal{
        position:fixed;
        left:100%;
        top:0;
        button{
            font-size:50px;
            background:transparent;
            border:0;
            z-index:1106;
        }
    }
    .wrap-close{
        background: rgba(0,0,0,.34);
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index:1105;
    }
    @media (max-width:992px){
        .modal-body{
        iframe{
            width: 93vw;
            height: 50vh;
        }
    }
    }
`;
