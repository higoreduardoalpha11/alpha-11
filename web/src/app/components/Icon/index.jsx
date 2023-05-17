import PropTypes from 'prop-types';
import {
  MdMenu,
  MdGroups2,
  MdOutgoingMail,
} from 'react-icons/md';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'menu':
      return (<MdMenu />);
    case 'time':
      return (<MdGroups2 />);
    case 'mail':
      return (<MdOutgoingMail />);
    default:
      return null;
  }
}
Icon.propTypes = {
  icon: PropTypes.string,
}
export default Icon;