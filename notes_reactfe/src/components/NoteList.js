

function NoteList({note}) {
// console.log(props)

    return (
        <div className="card dateCard">
            <h4>{note.date}</h4>
            <h6>{note.time}</h6>
            <button className="btn btn-primary">View Details</button>
        </div>
    )
}

export default NoteList;