// import notes from '../assets/data';
// import React from 'react';
import { useEffect, useState } from 'react';
// import axios from 'axios';


function DetailsCard({ match, history }) {
    const [showTextBox, setShowTextBox] = useState(false);
    const onClickTB = () => setShowTextBox(!showTextBox);
    // const [showSaveBtn, setShowSaveBtn] = useState(false);
    // const onClickSB = () => setShowSaveBtn(!showSaveBtn);
    let noteId = match.params.id;
    const notesBaseURL = `http://localhost:3001/notes/${noteId}`
    // let note = notes.find(note => note.id === Number(noteId))
    let [note, setNote] = useState(null);
    useEffect(() => {
        getNote()
        // axios.get(notesBaseURL).then((response) => {
        //     console.log(response.data)
        // })
    }, [noteId])

    async function getNote() {
        let response = await fetch(notesBaseURL)
        let data = await response.json()
        setNote(data);
    }

    let updateNote = async () => {
        await fetch(notesBaseURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            note: JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    let handleSubmit = () => {
        updateNote()
        history.push('/notes')
    }


    return (
        <>
            <div className="card" style={{ width: "18rem", display: "inline-block" }}>
                <div className="card-body">
                    <button onClick={onClickTB}>Edit Note</button>
                    <h5 className="card-title">{note?.patient}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note?.date}, {note?.time}</h6>
                    <p className="card-text">{note?.note}</p>
                    {/* { showSaveBtn ?  : null } */}
                    <a href="#" className="card-link">Prev Note</a>
                    <a href="#" className="card-link">Next Note</a>
                    <a href="#" className="card-link">Close</a>
                </div>
            </div>

            {showTextBox ? <div>
                <textarea onChange={(e) => { setNote(...note, { 'note': e.target.value }) }} value={note?.note}></textarea>
                <div>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div> : null}
        </>
    )
}

export default DetailsCard;