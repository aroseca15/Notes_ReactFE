

function NotesGreet() {


    return (
        <section>
            <h3>Welcome to The Notes App.</h3>
            <p>This is an app the has a react frontend and a django backend. Click the button below to check is out.</p>
            <a href= '/login' className='btn btn-success'>Click Me To Start!</a>
        </section>
    )
}

export default NotesGreet;