
import NoteList from '../components/NoteList'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const notesBaseURL = "http://localhost:3001/notes";
// import notes from '../assets/data'
// import DetailsCard from '../components/DetailsCard'

function Notes() {
    let [notes, setNotes] = useState([]);
    // let [note, setNote] = useState(null);

    useEffect(() => {
        // getNotes()
        axios.get(notesBaseURL).then((response) => {
            console.log(response.data)
        })
    }, [])

    // async function getNotes()  {
    //    let response = await fetch('http://localhost:3001/notes')
    //    let data = await response.json()
    //    console.log("Data:", data)
    // }

    // let getNotes = async () => {
    //     console.log("is this working?")


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