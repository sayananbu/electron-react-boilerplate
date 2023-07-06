import { SRoundedContainer } from 'components/common/common';
import styled from 'styled-components';

export const SGeneralInfo = styled(SRoundedContainer)`
  display: flex;
  grid-column: 1;
  grid-row: 3;
  justify-content: center;
  >div{
    font-size: 1.3rem;
    grid-template-columns: 65% 35%;
    place-items: start;
  }
`;

export const SHardware = styled.div`
  display: grid;
  padding: 0 10px;
  grid-template-columns: 50% 50%;
  >div{
    font-size: 1.3rem;
    grid-template-columns: 40% 60%;
    align-items: start;
  }
`



