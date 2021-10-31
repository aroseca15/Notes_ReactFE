import { Link } from 'react-router-dom'


function NoteList({note}) {
    
    return (
        <div className="card dateCard">
            <h3>{note.patient}</h3>
            <h4>{note.date}</h4>
            <h6>{note.time}</h6>
            <Link to={`/note/${note.id}`}><button className="btn btn-primary">View Details</button></Link>

        </div>
    )
}

export default NoteList;