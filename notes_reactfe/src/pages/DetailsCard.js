// import notes from '../assets/data';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const notesBaseURL = "http://localhost:3001/notes"

function DetailsCard({note}) {
    // let noteId = match.params.id;
    // let note = notes.find(note => note.id === Number(noteId))

    




    return (
        <div className="card" style={{ width: "18rem;" }}>
            <div className="card-body">
                <h5 className="card-title">{note?.patient}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{note?.date}, {note?.time}</h6>
                <p className="card-text">{note?.note}</p>
                <a href="#" className="card-link">Prev Note</a>
                <a href="#" className="card-link">Next Note</a>
                <a href="#" className="card-link">Close</a>
            </div>
        </div>
    )
}

export default DetailsCard;