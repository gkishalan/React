import PropTypes from 'prop-types';

function Course(props){

  function BuyCourse(discount,e){
    console.log(props.name , "Purchased", discount , "% discount");
    console.log(e);
  }

  return(
  props.name && <div className = "card">
      <img src = {props.image} alt="" />
      <h3>{props.name}</h3>
      <p> {props.price} </p>
      <button onClick={(event) =>BuyCourse(20,event)}> Buy Now </button>
  </div>
  );

Course.propTypes = {
    name : PropTypes.string,
    rate : PropTypes.number,
    show : PropTypes.bool,
  }
}
export default Course