import fullstack from './assets/fulllstack.webp'

const course1 = "HTML"

function Course(){

    return(
        <div className = "card">
            <img src = {fullstack} alt="" />
            <h3>{course1}</h3>
            <p>This is Begginer level course to learn all about HTML </p>
        </div>
    );
}

export default Course