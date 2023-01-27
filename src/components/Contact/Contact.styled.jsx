import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .contactName {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;

const ContactIcon = styled(FaUserCircle)`
  font-size: ${p => p.theme.fontSizes.l}px;
  color: #c74936;
  margin-right: ${p => p.theme.space[3]}px;
  margin-bottom: -3px;
`;

const DeleteBtn = styled.button`
  width: max-content;
  background-color: #087582;
  color: #fff;
  border: none;
  border-radius: ${p => p.theme.radii.small};
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #045a63;
  }
`;

export { StyledContact, ContactIcon, DeleteBtn };
