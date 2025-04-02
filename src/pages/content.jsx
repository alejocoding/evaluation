import imagen from "../assets/imagen.jpg";
import "./css.css";

function image(){
    return(
        <div className="background">
            <img src={imagen} className="img" alt="" />
            <div className="text"> A New era of strength training that looks, and feel, like nothing else</div>
       
        </div>
    )
}

export default image