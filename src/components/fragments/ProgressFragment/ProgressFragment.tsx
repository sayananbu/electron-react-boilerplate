import { FC, memo } from 'react';
import VerticalProgress from 'components/common/VerticalProgress/VerticalProgress';
import {
  LinearProgressContainer,
  SProgressFragmentContainer,
} from './styles/progressfragmentstyles';
import LabelValue from 'components/common/LabelValue/LabelValue';

const ProgressFragment: FC = () => {
  return (
    <SProgressFragmentContainer>
      <LabelValue label='Max:' value={100} />
      <LinearProgressContainer>
        <VerticalProgress />
      </LinearProgressContainer>
      <LabelValue label='Min:' value={0} />
    </SProgressFragmentContainer>
  );
};

export default memo(ProgressFragment);
