import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const Button = ({ route, type, title, content, color, handleOnClick, variate, isDisable }) => {
  const button = <button
    type={type}
    title={title}
    className={`button button-${color} button-${variate} ${isDisable ? 'button-disable' : ''} flex flex-row flex-center gap-5`}
    onClick={handleOnClick}
    disabled={isDisable}
  >
    {content}
  </button>

  if (route) return (<Link to={route}>{button}</Link>)
  return (button)
}
Button.propTypes = {
  route: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
  variate: PropTypes.string,
  isDisable: PropTypes.bool,
}
export default Button;