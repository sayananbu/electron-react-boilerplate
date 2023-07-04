import { FC, memo } from 'react';
import {
  LinearProgressContainer,
  SProgressFragmentContainer,
} from './styles/progressfragmentstyles';
import VerticalProgress from 'components/common/VerticalProgress/VerticalProgress';
import LabelProgress from 'components/common/LabelProgress/LabelProgress';

type ProgressFragmentProps = {};
const ProgressFragment: FC<ProgressFragmentProps> = () => {
  return (
    <SProgressFragmentContainer>
      <LabelProgress label={'Max:'} value={100}/>
      <LinearProgressContainer>
        <VerticalProgress />
      </LinearProgressContainer>
      <LabelProgress label={'Min:'} value={0}/>
    </SProgressFragmentContainer>
  );
};

export default memo(ProgressFragment);
