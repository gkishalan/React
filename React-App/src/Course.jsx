import PropTypes from 'prop-types';

function Course(props){

        return(
        props.name && <div className = "card">
            <img src = {props.image} alt="" />
            <h3>{props.name}</h3>
            <p> {props.price} </p>
            <span> {props.rate}</span>
        </div>
        );

Course.propTypes = {
    name : PropTypes.string,
    rate : PropTypes.number,
    show : PropTypes.bool,
  }
}
export default Course