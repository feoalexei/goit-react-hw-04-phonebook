import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    flex: 1;

    &:not(:last-child) {
      margin-right: ${p => p.theme.space[3]}px;
    }
  }

  & input {
    padding: ${p => p.theme.space[2]}px;
    border: 1px solid grey;
    border-radius: ${p => p.theme.radii.small};
    margin-top: ${p => p.theme.space[1]}px;
  }
`;

const AddBtn = styled.button`
  /* width: max-content;
  margin: 0 auto; */
  background-color: #087582;
  color: #fff;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #045a63;
  }
`;

export { StyledContactForm, AddBtn };
