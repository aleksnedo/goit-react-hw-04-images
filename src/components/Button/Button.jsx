import { Button, Wrapper } from './Button.styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onClick}>
        Load More
      </Button>
    </Wrapper>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};
