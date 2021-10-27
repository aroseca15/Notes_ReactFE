// import notes from '../assets/data';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const notesBaseURL = "http://localhost:3001/notes"

function DetailsCard() {
    // let noteId = match.params.id;
    // let note = notes.find(note => note.id === Number(noteId))

    let [note, setNote] = useState(null);

    useEffect(() => {
        getNotes()
        axios.get(notesBaseURL).then((response) => {
            console.log(response.data)
        })
    }, [])

    // async function getNotes()  {
    //    let response = await fetch('http://localhost:3001/notes')
    //    let data = await response.json()
    //    console.log("Data:", data)
    // }

    let getNotes = async () => {
        console.log("is this working?")


        // await fetch('http://localhost:3001/notes/')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     })
        //     .catch(function (err) {
        //         console.log("Something went wrong!", err);
        //     });


        // fetch('http://localhost:3001/notes')
        //     .then((response) => {
        //         return response.json();
        //     })

        //     .then((data => {
        //         console.log("Data:", data)
        //     }))
    }



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