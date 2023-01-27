import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </StyledFilter>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
