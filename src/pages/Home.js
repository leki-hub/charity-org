import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';


const onSubmit = (data, e) => {
    e.preventDefault(); 
   
    console.log('Form submitted:', data);
    // Can send the form data to the server
  };


const Home = () => {
    const { register, handleSubmit, errors } = useForm();

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
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="mission-item">
                  <i className="flaticon-medical"></i>
                  <h4><a href="#">give donation</a></h4>
                      <p>Take part in uplifting the needy<br/>You will get more in abundance<br/>
                        and suplication.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                        {/* another single-item -- */}
                        <div className="mission-item">
                            <i className="flaticon-heart-3"></i>
                            <h4><a href="#">become volunteer</a></h4>
                            <p>Becoming a Volunteer is a win-win<br/>
                                While we benefit from your art of kindness<br/>
                                You reap from us indirectly.</p>
                        </div>
                        {/* -- End single-item -- */}
                    </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="mission-item">
                            <i className="flaticon-heart"></i>
                            <h4><a href="#">fund raising</a></h4>
                            <p>Lets join hands together for great goals<br/>
                                Will be attained<br/>
                                Any amount is appreciated.</p>
                        </div>     
                     </div>
             </div>
             <a href="#" className="btn-3">Join Our Company</a>
          </div>

        </section>
          {/* --.welcome-seciton-- */}
          <section className="welcome-seciton page-3">
            <div className="container">
            <div className="section-title text-center">
               <h6>HELP to THE poor People</h6>
                 <h2>Recent <span>Causes</span></h2>
                 <p>Taking part in this initiative, is taking part in the future<br/> 
                       We are glad having you as a team player in this initiative </p>
            </div>
              <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                     <div className="welcome-item hvr-float-shadow">
                     <div className="img-holder">
                               <figure><Link to="/single-causes"><img src="images/blog/1.jpg" alt="Images" /></Link></figure>
                                {/* -- Start overlay -- */}
                                <div className="overlay">
                                    <h4><Link to="/single-causes">Help to reach <span>food!</span></Link></h4>
                                </div>
                                {/* -- End overlay -- */}
                            </div>
                            <div className="text">
                            <div className="pro-text">
                                    <h4>$44,210</h4>
                                    <p>Raised of <span>$99,541</span></p></div>
                                {/* --.progress-item -- */}
                                <div className="causes-progress">
                                <div className="progress-item">
                                            <div className="progress" data-value="70">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="value-holder"><span className="value">70</span></div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                                        {/* -- /progress-item -- */}
                                 <p>By supporting this initiative, you are supporting a generation.</p>
                                <a href="#">Donate now</a>
                            </div>
                        </div>
                     </div>
                     <div className="col-md-3 col-sm-6 col-xs-12">
                     <div className="welcome-item hvr-float-shadow">
                            <div className="img-holder">
                               <figure><Link to="/single-causes"><img src="images/blog/2.jpg" alt="Images" /></Link></figure>
                                {/* -- Start overlay -- */}
                                <div className="overlay">
                                    <h4><Link to="/single-causes">Help to reach <span>food!</span></Link></h4>
                                </div>
                                {/* -- End overlay -- */}
                            </div>
                            <div className="text">
                                <div className="pro-text">
                                    <h4>$44,210</h4>
                                    <p>Raised of <span>$99,541</span></p></div>
                                    {/* --.progress-item -- */}
                                    <div className="causes-progress">
                                        <div className="progress-item">
                                            <div className="progress" data-value="30">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="value-holder"><span className="value">30</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* - /progress-item - */}
                                <p>By supporting this initiative, you are supporting a generation.</p>
                                <a href="#">Donate now</a>
                            </div>
                        </div>
                     </div>
                     <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="welcome-item hvr-float-shadow">
                            <div className="img-holder">
                               <figure><Link to="/single-causes"><img src="images/blog/3.jpg" alt="Images"/></Link></figure>
                                {/* -- Start overlay -- */}
                                <div className="overlay">
                                    <h4><Link href="/single-causes">Help to reach <span>food!</span></Link></h4>
                                </div>
                                {/* -- End overlay -- */}
                            </div>
                            <div className="text">
                                <div className="pro-text">
                                    <h4>$44,210</h4>
                                    <p>Raised of <span>$99,541</span></p></div>
                                    {/* -.progress-item - */}
                                    <div className="causes-progress">
                                        <div className="progress-item">
                                            <div className="progress" data-value="35">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="value-holder"><span className="value">35</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- /progress-item -- */}
                                <p>By supporting this initiative, you are supporting a generation.</p>
                                <a href="#">Donate now</a>
                            </div>
                        </div>
                        {/* -- End single-item -- */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="welcome-item hvr-float-shadow">
                            <div className="img-holder">
                               <figure><a href="/single-causes"><img src="images/blog/4.jpg" alt="Images" /></a></figure>
                                {/* -- Start overlay -- */}
                                <div className="overlay">
                                    <h4><Link to="/single-causes">Help to reach <span>food!</span></Link></h4>
                                </div>
                                {/* -- End overlay -- */}
                            </div>
                            <div className="text">
                                <div className="pro-text">
                                    <h4>$44,210</h4>
                                    <p>Raised of <span>$99,541</span></p></div>
                                    {/* --.progress-item -- */}
                                    <div className="causes-progress">
                                        <div className="progress-item">
                                            <div className="progress" data-value="70">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="value-holder"><span className="value">70</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- /progress-item -- */}
                                <p>By supporting this initiative, you are supporting a generation.</p>
                                <a href="#">Donate now</a>
                              </div>
                            </div>
                         {/* -- End single-item -- */}
                         </div>
                      </div>
                   </div>
               </section>
          {/* --/wellcome-section--  */}
          <section className="event-seciton">
              <div className="container">
              <div className="section-title">
                    <h2>upcoming <span>event</span></h2>
                    <p>By supporting this initiative, you are supporting a generation.<br/> 
                       Below are a list event programs to be undertaken.</p>
                </div>
                <div className="row">
                     <div className="col-md-8 col-sm-8 col-xs-12">
                         <div className="row">
                         <div className="col-md-6 col-sm-6 col-xs-12">
                                {/* -- Start single-item -- */}
                                <div className="event-item">
                                    <div className="img-holder">
                                       <figure><Link to="/single-event"><img src="images/blog/5.jpg" alt="Images"/></Link></figure>
                                        <div className="text">
                                            <h4><Link to="/single-event">October 5, 2017 <span>giving food</span></Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* -- End single-item -- */}
                            </div>
                            {/* another single item */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="event-item">
                                    <div className="img-holder">
                                       <figure><Link to="/single-event"><img src="images/blog/6.jpg" alt="Images"/></Link></figure>
                                        <div className="text">
                                            <h4><Link to="/single-event">October 5, 2017 <span>giving food</span></Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                               <div className="event-item">
                               <div className="img-holder">
                                       <figure><Link to="/single-event"><img src="images/blog/7.jpg" alt="Images"/></Link></figure>
                                        <div className="text">
                                            <h4><Link to="/single-event">October 5, 2017 <span>giving food</span></Link></h4>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="event-item">
                                <div className="img-holder">
                                       <figure><Link to="/single-event"><img src="images/blog/8.jpg" alt="Images" /></Link></figure>
                                        <div className="text">
                                            <h4><Link to="/single-event">October 5, 2017 <span>giving food</span></Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                      </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                   <div className="event-right"> 
                      <div className="text">
                      <div className="date">
                                   <h4>19<span className="sep">th sep,</span> <span> 2017</span></h4>
                               </div>
                               <h2>help children: build a School for education</h2>
                                <h4>Join Our Event: <span>Donate</span></h4>
                                <p>By supporting this initiative, you are uplifting a generation.
                                By uplifting a generation, societies are strengthened.
                                By strengthening a society, the living standards are improved.
                                My improving the standards of living, life is lived well .</p>
                                <Link href="/single-event">View All Events</Link>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>   
             </section>
             {/* --Start client-section -- */}
             <section className="client-section" style={{ backgroundImage: 'url(images/blog/bg5.jpg)' }}>
                <div className="container">
                <div className="section-title text-center">
                    <h2>client <span>feedback</span></h2>
                </div>
                <div className="clientcarosule">
                 <div className="client-item">
                    <div className="client">
                            <div className="img-holder">
                                <figure><img src="images/blog/3.png" alt="Images" /></figure>
                            </div>
                            <div className="text">
                                <h4>Leki Emmanuel</h4>
                                <p> Manager</p>
                            </div>
                            <p>A committed team player<br/>
                                A people's person , reachable.</p>
                         </div>
                    </div>
          <div className="client-item">
          <div className="client">
              <div className="img-holder">
                  <figure><img src="images/blog/4.png" alt="Images" /></figure>
                      </div>
                         <div className="text">
                            <h4>Sara leon</h4>
                                <p>ceo of Lesmo group</p>
                            </div>
                            <p>A servant with dignity<br/>
                                Considerate about other people's welfare.</p>
                        </div>
                 </div>
                 <div className="client-item">
                     <div className="client">
                     <div className="img-holder">
                                <figure><img src="images/blog/4.png" alt="Images" /></figure>
                            </div>
                            <div className="text">
                                <h4>burtho leo</h4>
                                <p>doctor</p>
                            </div>
                            <p>A distinguished medical practictioner<br/>
                               A researcher on health matters.</p>

                     </div>
                 </div>
                </div>
                </div>
             </section>
             <section className="blog-seciton">
            <div className="container">
                <div className="section-title text-center">
                    <h6>Learn more from our blog</h6>
                    <h2>latest <span>news</span></h2>
                    <p>A community of friends, from all over the world , with a mission.<br/> 
                        A mission to provide solutions to life challenges in slums</p>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="blog-item wow fadeInUp">
                            <div className="img-holder">
                               <figure><Link to="/single-blog"><img src="images/blog/10.jpg" alt="Images"/></Link></figure>
                            </div>
                            <div className="text">
                                <h4><Link to="/single-blog">Children’s National<br/>festival for learning</Link></h4>
                                <h5><i className="fa fa-user" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <p> A community of friends, from all over the world , with a mission.<br/>
                                A mission to provide solutions to life challenges in slums</p>
                                <a href="#"className="dont-btn">Donate now</a>
                            </div>
                        </div>
                        {/* -- End single-item -- */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="blog-item wow fadeInUp">
                            <div className="img-holder">
                               <figure><Link to="/single-blog"><img src="images/blog/11.jpg" alt="Images"/></Link></figure>
                            </div>
                            <div className="text">
                                <h4><Link to="/single-blog">Children’s National<br/>festival for learning</Link></h4>
                                <h5><i className="fa fa-user" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <p>A community of friends, from all over the world , with a mission.
                                A mission to provide solutions to life challenges in slums.
                                </p>
                                <a href="#"className="dont-btn">Donate now</a>
                            </div>
                        </div>
                    {/* -- End single-item -- */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="blog-item wow fadeInUp">
                            <div className="img-holder">
                               <figure><Link to="/single-blog"><img src="images/blog/12.jpg" alt="Images" /></Link></figure>
                            </div>
                            <div className="text">
                                <h4><Link to="/single-blog">Children’s National<br/>festival for learning</Link></h4>
                                <h5><i className="fa fa-user" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <p>A community of friends, from all over the world , with a mission.
                                A mission to provide solutions to life challenges in slums.
                                </p>
                                <a href="#"className="dont-btn">Donate now</a>
                            </div>
                        </div>
                        {/* -- End single-item -- */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        {/* -- Start single-item -- */}
                        <div className="blog-item wow fadeInUp">
                            <div className="img-holder">
                               <figure><Link to="/single-blog"><img src="images/blog/13.jpg" alt="Images"/></Link></figure>
                            </div>
                            <div className="text">
                                <h4><Link to="/single-blog">Children’s National<br />festival for learning</Link></h4>
                                <h5><i className="fa fa-user" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i>By <span>John Doe</span></h5>
                                <p>A community of friends, from all over the world , with a mission.
                                A mission to provide solutions to life challenges in slums.
                                </p>
                                <a href="#"className="dont-btn">Donate now</a>
                            </div>
                        </div>
                        {/* -- End single-item -- */}
                    </div>
                </div>
            </div>
        </section>
          {/* --Start volunteer-section -- */}
          <section className="volunteer-section" style={{backgroundImage:'url(images/blog/bg6.jpg)'}}>
            <div className="container">
                <div className="volunteer-item">
                    <h2>WE HELP many people</h2>
                    <h4>want to become a <span> volunteer!</span></h4>
                    <p>There is freewill to join our growing community <br/>, don't be left out.Be an agent that stands with humanity</p>
                    <a href="#" className="btn-3">Apply now</a>
                </div> 
            </div>
        </section>
          {/* --.contact-section-- */}
          <section className="contact-seciton" style={{backgroundImage:'url(images/blog/bg1.jpg)'}}>
            <div className="img-left wow slideInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <figure><img src="images/blog/2.png" alt="Images" /></figure>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-md-offset-4 col-sm-3">
                        <div className="text">
                        <h2>Raise your<br/>
                            <span>Hand</span> to<br/>
                            help<br/> 
                            <span className="them">Them!</span></h2>
                        </div>
                    </div>
                    <div className="col-md-5  col-sm-9">
                        <div className="default-form clearfix">
                     <form method="post" className="contact-form" onSubmit={(e) => handleSubmit(onSubmit(e))}>
                             <div className="form-group name">
                             <input
                             type="text"
                             name="lastname"
                             placeholder="Full Name"
                             ref={register({ required: 'Full Name is required' })}
                              />
                             {errors.lastname && <span>{errors.lastname.message}</span>}
                            </div>
                            <div className="form-group">
                             <input
                             type="email"
                             name="email"
                             placeholder="Email"
                             ref={register({ required: 'Email is required', pattern: /^\S+@\S+$/i })}
                              />
                            {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                            <input
                            type="text"
                            name="phone"
                            placeholder="Mobile"
                            ref={register({ required: 'Mobile is required' })}
                            />
                            {errors.phone && <span>{errors.phone.message}</span>}
                           </div>
                           <div className="form-group comments">
                             <textarea
                            name="message"
                             placeholder="Text"
                            ref={register({ required: 'Message is required' })}
                             ></textarea>
                           {errors.message && <span>{errors.message.message}</span>}
                             </div>
                          <button type="submit" className="btn btn-1">
                           Contact Now
                           </button>
                  </form>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* --.news-section-- */}
        <div className="news-seciton">
           <div className="container">
                 <div className="row">
                 <div className="col-md-5 col-sm-6 col-xs-12">
                        <div className="news-text">
                            <h4>Newsletter Sign-up</h4>
                            <p>Would you like to be getting updates from our activties,subscribe to our Newsletter.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-6 col-xs-12">
                    <div className="news-form">
                            <input type="text" name="lastname" placeholder="Full Name" value="" />
                            <input type="email" name="email" placeholder="Email" value=""/>
                            <button type="submit" className="btn news-btn">send</button>
                        </div>

                    </div>

                 </div>

           </div>


        </div>




















      </div>
           
  )
}

export default Home
