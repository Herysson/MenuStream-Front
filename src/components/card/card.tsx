import "./card.css";

interface CardProps {
    price: number,
    name: string,
    image: string
}

export function Card({ price, image, name }: CardProps) {
    return (
        <div className="card-md-4 mb-4" style={{ width: '18rem'}}>
            <img src={image} className="card-img-top" style={{ width: '100%', height: '220px', borderRadius: '8px'}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><b>Valor:</b>{price}</p>
                <a href="#" className="btn btn-primary">Add Cart</a>
            </div>
        </div>
    )
}