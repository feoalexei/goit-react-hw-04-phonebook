import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export { StyledList };
