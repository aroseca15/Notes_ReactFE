import { useState } from 'react';
import NoteList from '../components/NoteList'
// import notes from '../assets/data'
// import DetailsCard from '../components/DetailsCard'

function Notes() {
    let [notes, setNotes] = useState([])
    return (
        <section>
            <div>
                <h2>Notes</h2>
                <p>{notes.length}</p>
            </div>

            {notes.map((note, id) => (
                <NoteList className="dateCardPosition" key={id} note={note} />
            ))}
            <a href='/' className='btn btn-warning'>Click Me To Go Home!</a>
            {/* <DetailsCard/> */}
        </section>
    )

}

export default Notes;