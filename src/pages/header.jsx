import "./css.css";


const Header = () =>{
    
    return(
        
        <header className="header" id="Home">

            <div className="logos">
                <i className="bi bi-android "></i>
                Kimtry
            </div> 
                
            <nav className="nav justify-content-center gap-3 fs-5 fw-bold">
                <li><a href="#" onClick={(e) => scrollToSection(e, "Home")}>Home</a></li>
                <li><a href="#" onClick={(e) => scrollToSection(e, "about")}>About Us</a></li>
                <li><a href="#" onClick={(e) => scrollToSection(e, "footer")}>Contact Us</a></li>
            </nav>

        </header>




    )
}

const scrollToSection = (e, sectionId) => {
    e.preventDefault(); 
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

export default Header;