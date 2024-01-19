import React from 'react'

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
                 
                 </nav>
               </div> 
            </section>

        </header>
      </div>
           
  )
}

export default Home
