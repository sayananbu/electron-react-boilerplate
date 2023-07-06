import { SRoundedContainer } from 'components/common/common';
import styled from 'styled-components';

export const SUnitConfigFragment = styled(SRoundedContainer)`
  grid-row: 1;
  grid-column: 3;
  padding: 5px;
  justify-content: space-evenly;
  box-sizing: border-box;
  text-align: center;
`;

export const SConfigLabel = styled.span`
  font-size:1.4rem;
  font-weight: 500;
  width: 300px;
`