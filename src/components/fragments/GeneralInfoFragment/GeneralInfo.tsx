import { FC, memo } from 'react';
import { SGeneralInfo, SHardware } from './styles/generalinfostyles';
import LabelValue from 'components/common/LabelValue/LabelValue';

const GeneralInfoFragment: FC = () => {
  return (
    <SGeneralInfo>
      <LabelValue label="Код вх. сигнала:" value={0} />
      <LabelValue label="Значение:" value={0} />
      <LabelValue label="Статус узла:" value={0} />
      <SHardware>
        <LabelValue label="Hw:" value='' />
        <LabelValue label="Sw:" value='' />
      </SHardware>
    </SGeneralInfo>
  );
};

export default memo(GeneralInfoFragment);
