import { FC, memo } from 'react';
import { SLabelProgress } from './styles/labelprogressStyles';

type LabelProgressProps = {
  label: string;
  value: number | string;
};
const LabelValue: FC<LabelProgressProps> = ({ label, value }) => {
  return (
    <SLabelProgress>
      <span>{label}</span>
      <span>{value}</span>
    </SLabelProgress>
  );
};

export default memo(LabelValue);
