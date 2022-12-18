import { Button, Wrapper } from './Button.styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onClick} disabled={isLoading}>
        Load More
      </Button>
    </Wrapper>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};
