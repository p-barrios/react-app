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
                        <p>Description: {props.description}<br/>Price: {props.price}</p>
                        </div>
                        <div className="card-action">
                        <a href="!#">Ver detalles</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item