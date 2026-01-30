import fullstack from './assets/fulllstack.webp'

const course1 = "HTML"

function Course(props){

    return(
        <div className = "card">
            <img src = {fullstack} alt="" />
            <h3>{props.name}</h3>
            <p> {props.price} </p>
        </div>
    );
}

export default Course