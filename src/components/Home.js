import react from "react";
import logo from "../img/logo.svg";
import intro from "../img/bg-intro-desktop.svg";
import mockup from "../img/image-mockups.png";
import online from "../img/icon-online.svg";
import budgeting from "../img/icon-budgeting.svg";
import onboarding from "../img/icon-onboarding.svg";
import api from "../img/icon-api.svg";
import currency from "../img/image-currency.jpg";
import restaurant from "../img/image-restaurant.jpg";
import plane from "../img/image-plane.jpg";
import confetti from "../img/image-confetti.jpg";
import instagram from "../img/icon-instagram.svg";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import youtube from "../img/icon-youtube.svg";
import pinterest from "../img/icon-pinterest.svg";
import logoWhite from "../img/logo-white.svg";
import hamburger from "../img/icon-hamburger.svg";
import cross from "../img/icon-close.svg";

const Home = () => {

    const showMenu=()=>{
        const navLink=document.querySelector(".nav-links")
        const toggleImg=document.querySelector("#toggle-img");

        navLink.classList.toggle("open");
        
        const isOpen=navLink.classList.contains("open");
        if(isOpen){
            toggleImg.src=cross;
        }else{
            toggleImg.src=hamburger;
        }

    }
    return (
        <>
            {/* Navigation */}
            <section className="nav-section">
                <nav className="container">
                    <img src={logo} alt="logo" />
                    <button className="hamburger-btn" onClick={showMenu}><img id="toggle-img" src={hamburger} alt="hamburger" /></button>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>
                    <button className="btn navbar-cta">Request Invite</button>
                </nav>
            </section>

            {/* Introduction */}
            <section className="header-section">
                <div className="container header-wrap">
                    <div className="header-text">
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <button className="btn">Request Invite</button>
                    </div>
                    <div className="header-image">
                        <img src={intro} alt="intro" />
                        <img src={mockup} alt="mockups" />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="feature-section">
                <div className="container">
                    <h1>Why choose Easybank?</h1>
                    <p> We leverage Open Banking to turn your bank account into your financial hub.<br />Control your finances like never before.</p>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src={online} alt="online" />
                            <h2>Online Banking</h2>
                            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                        <div className="card">
                            <img src={budgeting} alt="online" />
                            <h2>Simple Budgeting</h2>
                            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                        </div>
                        <div className="card">
                            <img src={onboarding} alt="online" />
                            <h2>Fast Onboarding</h2>
                            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                        </div>
                        <div className="card">
                            <img src={api} alt="online" />
                            <h2>Open API</h2>
                            <p>  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="articles-section">
                <div className="container">
                    <h1>Latest Articles</h1>
                    <div className="article-wrapper">
                        <div className="article-card">
                            <img src={currency} alt="currency" />
                            <div className="content">
                                <h6>By Claire Robinson</h6>
                                <a href="/">Receive money in any currency with no fees</a>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                            </div>
                        </div>
                        <div className="article-card">
                            <img src={restaurant} alt="currency" />
                            <div className="content">
                                <h6>  By Wilson Hutton</h6>
                                <a href="/">Treat yourself without worrying about money</a>
                                <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                            </div>
                        </div>
                        <div className="article-card">
                            <img src={plane} alt="currency" />
                            <div className="content">
                                <h6>By Wilson Hutton</h6>
                                <a href="/">Take your Easybank card wherever you go. We want you to enjoy your travels.</a>
                                <p>This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                            </div>
                        </div>
                        <div className="article-card">
                            <img src={confetti} alt="currency" />
                            <div className="content">
                                <h6>By Claire Robinson</h6>
                                <a href="/">Our invite-only Beta accounts are now live!</a>
                                <p>  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="content">
                        <div>
                            <img src={logoWhite} alt="logo" />
                            <ul className="socials">
                                <li><a href="/"><img src={instagram} alt="instagram" /></a></li>
                                <li><a href="/"><img src={facebook} alt="facebook" /></a></li>
                                <li><a href="/"><img src={twitter} alt="twitter" /></a></li>
                                <li><a href="/"><img src={youtube} alt="youtube" /></a></li>
                                <li><a href="/"><img src={pinterest} alt="pinterest" /></a></li>
                            </ul>
                        </div>

                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>

                        <div className="footer-cta">
                            <button className="btn">Request Invite</button>
                            <p className="copyright">© Easybank, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;