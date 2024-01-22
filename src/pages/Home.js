import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
            //  --Page Wrapper--
      <div className="page-wrapper">
         {/* -- Preloader -- */}
         <div className="preloader"></div>
                   {/* --Header top area--  */}
            <header className="main-header header-style-one">
                   <section className="header-top">
                <div className="container">
                    <div className="header">
                        <div className="header-top-left">
                            <ul>
                             <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                             <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                             <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                        </div>
                        <div className="header-top-right">
                            <ul>
                                <li>
                                    <a href="#"><span><i className="fa fa-envelope-o" aria-hidden="true"></i></span> kindness@yahoo.com</a></li>
                                <li><p><span><i className="fa fa-phone" aria-hidden="true"></i></span>012.9355.121</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* --/header_top_area-- */}

          {/* main menu */}
            <section className="mainmenu-area">
               <div className="container">
                 <div className="logo pull-left">
                    <a href="/"><img src="images/logo.png" alt=""/></a>
                 </div>
                 <nav className="main-menu pull-left"> 
                 <div className="navbar-header">     
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix">
                       <ul className="navigation clearfix"> 
                          <li className="current dropdown"><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li className="dropdown"><href to="#pages">Pages</href>
                               <ul>
                                    <li><Link to="/gallery">Gallery </Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/error-page">404</Link></li>
                                </ul>
                          </li>
                          <li className="dropdown"><Link href="/blog">Blog</Link>
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/single-blog"> Single Blog</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/causes">Causes</Link>
                                <ul>
                                    <li><Link to="/causes">Causes</Link></li>
                                    <li><Link to="/single-causes"> Single Causes</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/event">Event</Link>
                                <ul>
                                    <li><Link to="/event">Event</Link></li>
                                    <li><Link to="/single-event"> Single Event</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                       </ul>
                   </div>
                </nav>
             </div> 
         </section>
        </header>
         {/* ======= Banner ====== */}
		<section className="main-slider">
                <div className="tp-banner-container">
                    <div className="tp-banner" >
                        <ul>
                            <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="images/slider/4.jpg"  data-saveperformance="off"  data-title="Awsome Service">
                            <img src="images/slider/4.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/> 

                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><h4>Thousand of children are waiting for help!</h4></div></div>
                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-40"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><h2>help the <span>poor</span>people</h2></div></div>

                            <div className="tp-caption lfr tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="50"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><p>Your Participation to this activity will go along way to support a dream<br/>
                                ,You can contribute at any financial Capacity </p></div></div>
                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><a href="#" className="btn-3">Donate now</a></div></div>
                            <div className="tp-caption lfr tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="400"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;">
                              <div className="container">
                                <div className="slider-bar  wow fadeInUp animated">
                                    <div className="img-box">
                                        <h4>12</h4>
                                        <p>February,17</p>
                                    </div>
                                    <div className="text">
                                        <h4>Syrian<span>child needs foor<br/>
                                            for their</span>  Existance</h4>
                                    </div>
                                    <div className="counter-side">
                                        <div className="inner-box">
                                            <div id="countdown-timer" className="countdown"></div>
                                        </div>
                                    </div>
                                    <a href="#" className="btn-3">Donate today</a>
                                </div>
                                </div>  
                            </div>                        
                            </li>
                            <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="images/slider/1.jpg"  data-saveperformance="off"  data-title="Awsome Service">
                            <img src="images/slider/1.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/> 

                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><h4>Thousand of children are waiting for help!</h4></div></div>
                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-40"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><h2>help the <span>poor</span>people</h2></div></div>

                            <div className="tp-caption lfr tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="50"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><p>Your Participation to this activity will go along way to support a dream<br/>
                                udantium, totam rem aperiam eaque ipsa, quae ab illo inventore </p></div></div>
                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><a href="#" className="btn-3">Donate now</a></div></div>
                            <div className="tp-caption lfr tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="400"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;">
                              <div className="container">
                                <div className="slider-box  wow fadeInUp animated">
                                    <div className="slider-item bor">
                                        <img src="images/resources/1.png" alt="Images"/>
                                        <div className="text">
                                            <h4>Become a donator</h4>
                                            <p>It is our sole responsibility<br/> To stand with them. </p>
                                            <a href="#">donate now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <div className="slider-item bor">
                                        <img src="images/resources/2.png" alt="Images"/>
                                        <div className="text">
                                            <h4>Become a donator</h4>
                                            <p>It is our sole responsibility<br/> To stand with them. </p>
                                            <a href="#">donate now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <img src="images/resources/3.png" alt="Images"/>
                                        <div className="text">
                                            <h4>Become a donator</h4>
                                            <p>It is our sole responsibility<br/> To stand with them. </p>
                                            <a href="#">donate now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </div>  
                            </div>
                            
                            </li>
                            <li data-transition="slidedown" data-slotamount="1" data-masterspeed="1000" data-thumb="images/slider/3.jpg"  data-saveperformance="off"  data-title="Professional Mechanics">
                            <img src="images/slider/3.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" /> 

                            <div className="tp-caption lft tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><h4>we are determined to change others life</h4></div></div>


                            <div className="tp-caption lfb tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="-40"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="white-title"><h2>Help is <span>our</span> mission</h2></div></div>
                            <div className="tp-caption lfr tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="50"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><p>Your Participation to this activity will go along way to support a dream<br/>Send you Contribution, and support a dream</p></div></div>
                            <div className="tp-caption lfl tp-resizeme"
                            data-x="center" data-hoffset="0"
                            data-y="center" data-voffset="100"
                            data-speed="1500"
                            data-start="500"
                            data-easing="easeOutExpo"
                            data-splitin="none"
                            data-splitout="none"
                            data-elementdelay="0.01"
                            data-endelementdelay="0.3"
                            data-endspeed="1200"
                            data-endeasing="Power4.easeIn"
                            style="z-index: 4; max-width: auto; max-height: auto; white-space: nowrap;"><div className="grey-title"><a href="#" className="btn-3">Donate now</a></div></div>
                            </li>
                        </ul>
                        <div className="tp-bannertimer"></div>

                    </div>
                </div>
            
		</section>
        {/* ...Section... */}
        <section className="mission-seciton">
          <div className="container">
             <div className="section-title text-center">
                <h6>HELP to THE poor People</h6>
                <h2>our <span>mission</span></h2>
                <p>Your Participation to this activity will go along way to support a dream<br/>
                        be a volunteer today. </p>
             </div>
             <div className="row">

                
             </div>
          </div>

        </section>



























      </div>
           
  )
}

export default Home
