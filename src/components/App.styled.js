import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
const Navigation = styled.nav`
  display: flex;
  gap: 40px;
`;
export { StyledLink, Navigation };
