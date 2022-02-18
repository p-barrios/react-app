import { Link } from 'react-router-dom'

const Item = (props) => {

    return(
        <>
            <div className="Item">
                <div className="row">
                    <div className="col12 ">
                    <div className="card">
                        <div className="card-image">
                            <img src={props.pictureUrl} alt="Test"/>
                        </div>
                        <div className="card-content">
                            <h6>{props.title}</h6>
                        </div>
                        <div className="card-action">
                            <Link to={'/item/'+props.id}>Ver detalles</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item