// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return(
        <div>
            <p>
                <img src={props.pastry.image}></img>
                <br></br>
                {props.pastry.name}
                <br></br>
                {props.pastry.price}
                <br></br>
                {props.pastry.description}
                <br></br>
                <button onClick={() => {props.onClick(props.pastry)}}>Add to Cart</button>
            </p>
        </div>
    )
}