import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";
import Cards from "../elements/cards";

function About(){

    return(
        <div className="container text-center" style={{height: "700px"}} id="about">
            <div className="row justify-content-center">
                <div className="col-md-8 center">
                        <div className="textoAbout">More About </div>

                    <div className="visualizador">
                        
                        <Cards imagen={imagen1} text="BELIEVE IT AND DO IT"/>
                        <Cards imagen={imagen2} text="YOU´RE THE BEST"/>
                        <Cards imagen={imagen4} text="0 EXCUSES"/>
                        <Cards imagen={imagen5} text="SHOWS YOUR POWER"/>
                        <Cards imagen={imagen3} text="INSANE TOOLSTIPS"/>
                    </div>
                    
                 </div>

            </div>
        </div> 
    )
}
export default About