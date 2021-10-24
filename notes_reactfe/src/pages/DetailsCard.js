

function DetailsCard(props) {
    console.log("PROPS:", props)
    return (
        <div className="card" style={{ width: "18rem;" }}>
            <div className="card-body">
                <h5 className="card-title">{props.note.patient}</h5>
                <h6 className="card-subtitle mb-2 text-muted">fine</h6>
                <p className="card-text">whatever</p>
                <a href="#" className="card-link">Prev Note</a>
                <a href="#" className="card-link">Next Note</a>
                <a href="#" className="card-link">Close</a>
            </div>
        </div>
    )
}

export default DetailsCard;