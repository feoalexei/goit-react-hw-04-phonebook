import styled from 'styled-components';

const AppContainer = styled.div`
  width: 500px;
  border: 7px solid #fff;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.backgroundGrey};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  padding: ${p => p.theme.space[5]}px;
  margin: 100px auto 0;
`;

export { AppContainer };
