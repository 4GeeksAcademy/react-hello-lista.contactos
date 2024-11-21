import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = ({id, name, phone, email, address}) => {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={rigoImage} className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{phone}</p>
                            <p className="card-text">{email}</p>
                            <p className="card-text">{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card