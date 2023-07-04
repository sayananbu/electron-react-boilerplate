import { FC } from 'react';
import { SLabelProgress } from './styles/labelprogressStyles';

type LabelProgressProps = {
  label: string;
  value: number;
};
const LabelProgress: FC<LabelProgressProps> = ({ label, value }) => {
  return (
    <SLabelProgress>
      <span>{label}</span>
      <span>{value}</span>
    </SLabelProgress>
  );
};

export default LabelProgress;
