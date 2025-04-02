

const Cards = ({imagen, text}) =>{
    return(
        <div className="cards">
        <img src={imagen} className="cardsImage" alt="" />
        <p>
            {text}
        </p>
    </div>
    )
}

export default Cards;