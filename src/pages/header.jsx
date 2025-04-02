import "./css.css";


const Header = () =>{
    
    return(
        
        <header className="header">

            <div className="logos">
                <i className="bi bi-android "></i>
                Kimtry
            </div> 
                
            <nav className="nav justify-content-center gap-3 fs-5 fw-bold">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </nav>

        </header>




    )
}

export default Header;