import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterCSS>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="logo-wrapper">
                        <div className="footer-logo">
                            <img src="images/fielddbylogo.png" alt=""/>
                        </div>
                        <div className="footer-contents">
                            <p>
                                상호 : (주)플로우업 | 사업자등록번호 : <br/>
                                682-81-02584 | 서울특별시 서초구 강남대<br/>
                                로 53길 8, 11층 1-42호(서초동) |<br/>
                                제 2021-서울동작-1588 호 | 대표 : 김형우 <br/>
                                대표번호 : 070-7954-6410<br/><br/>

                                일부 상품의 경우 (주)플로우업은 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보,<br/>
                                거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
                            </p>
                        </div>
                        <div className="social-small">
                            <small className="website-rights">FieldBy © 2021</small>
                        </div>
                    </div>
                </div>
            </section>
        </FooterCSS>
    )
}


const FooterCSS = styled.div`
    background-color : #212121;
    margin-top : 25px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : auto;
    padding-top : 25px;
    padding-bottom : 20px;
    .social-media{
        max-width : 1000px;
        width : 100%;
        .social-media-wrap{
            display : flex;
            justify-content : space-around;
            align-items : center;
            width : 90%;
            max-width : 1000px;
            margin : 30px auto 0 auto;
            .logo-wrapper{
                flex-direction : column;
                .footer-logo{
                    color: #fff;
                    justify-content : center;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                }
                .footer-logo > img{
                    height : 45px;
                }
                .footer-contents > p{
                    font-size : 7px;
                    font-weight : 200;
                    color : #dcdcdc;
                    text-align : center;
                    padding-top : 20px;
                    padding-bottom : 15px;
                }
                .social-small{
                    display : flex;
                    justify-content : space-around;
                    width : 100%;
                    align-items : flex-start;
                    .website-rights{
                        color : #dcdcdc;
                        font-size : 7px;
                    }
                }
            }
        }
    }
`

export default Footer;