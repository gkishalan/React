import PropTypes from 'prop-types';

function Course(props){

    if(props.show == true){
            return(
        <div className = "card">
            <img src = {props.image} alt="" />
            <h3>{props.name}</h3>
            <p> {props.price} </p>
            <span> {props.rate}</span>
        </div>
    );
    }
    else {
        return (
            <div className = "card">
                <h3>Course Unavailable</h3>
            </div>
        );
    }
}

Course.propTypes = {
    name : PropTypes.string,
    rate : PropTypes.number,
    show : PropTypes.bool,
}

export default Course