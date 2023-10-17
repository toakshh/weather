import {PropTypes} from "prop-types";
const Cards = (props) => {
    const {value, title}= props
  return (
    <div>
        <div>{title}
        </div>
        <div>{value}</div>
    </div>
  )
}
Cards.propTypes ={
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.oneOf([null])
  ]),
    title: PropTypes.string
}

export default Cards