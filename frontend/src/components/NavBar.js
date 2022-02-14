import React from "react";
import logo from "../../../src/main/resources/static/img/logo.png";
import navbar_pointer from "../../../src/main/resources/static/img/navbar_pointer.png";

function NavBar(){
    return(
        <div id="div-navbar">
            <div id="div-navbar-logo">
                <img src={logo} alt="드림하우스"></img>
            </div>
            <div id="div-navbar-buttons">
                <li>
                    <ul>
                        <p>드림하우스</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>골프투어</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>시내투어</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>유적관광</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>휴양페키지</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>기타투어</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>후기</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                    <ul>
                        <p>예약문의</p>
                        <img src={navbar_pointer} alt="pointer"></img>
                    </ul>
                </li>
            </div>
            <p>NAVBAR</p>
             {/* <div id="div-main-page-top-fixed-frame-texts">
                <a href="/">드림하우스 · 이집트 최대 점유율! 만족도 1위!!</a>
                <p>연중무휴 · 오전 9시 - 오후 9시 (GMT+2) · 문의 604-893-8687 · 북미 무료전화 1-877-556-8687</p>
            </div>
            <div id="div-main-page-top-fixed-frame-btns">z
                <button>로그인</button>
                <button>예약조회</button>
                <button>예약문의</button>
            </div>            */}
        </div>
    );
}

export default NavBar;