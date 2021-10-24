import NoteList from '../components/NoteList'
import notes from '../assets/data'
// import DetailsCard from '../components/DetailsCard'

function Notes(props) {
    console.log('PROPS:', props)
    return (
        <section>
            {notes.map((note, id) => (
                <NoteList key={id} note={note} />
            ))}
            <a href='/' className='btn btn-warning'>Click Me To Go Home!</a>
            {/* <DetailsCard/> */}
        </section>
    )

}

export default Notes;