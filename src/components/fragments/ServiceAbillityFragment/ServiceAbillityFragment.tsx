import React, { memo } from 'react';
import { SServiceAbillityFragment } from './styles/serviceabillitystyles';
import LabelValue from 'components/common/LabelValue/LabelValue';

const ServiceAbillityFragment = () => {
  return (
    <SServiceAbillityFragment>
      <LabelValue label="Исправность:" value={0} />
      <LabelValue label="Проверка:" value={0} />
      <LabelValue label="Блокировка:" value={0} />
      <LabelValue label="Выход за нижний предел:" value={0} />
      <LabelValue label="Выход за верхний предел:" value={0} />
    </SServiceAbillityFragment>
  );
};

export default memo(ServiceAbillityFragment);
