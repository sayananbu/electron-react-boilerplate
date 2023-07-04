import Slider from "@mui/material/Slider";
import { FC, memo } from "react";

type VerticalProgressProps = {}
const VerticalProgress: FC<VerticalProgressProps> = () => {
  return (
    <Slider
      value={20}
      min={0}
      step={1}
      orientation="vertical"
      max={100}
      sx={{
        height: '100%',
        width: '40%',
        borderRadius: 1,
        cursor:'default ',
        '& .MuiSlider-thumb': {
          width: 0,
          height: 0,
          transition: '0.2s cubic-bezier(.47,1.64,.41,.8)',
          '&.Mui-active, &:hover': {
            display: 'none',
          },
        },
        '& .MuiSlider-track': {
          backgroundColor: 'green',
        },
        '& .MuiSlider-rail': {
          opacity: 0.28,
          backgroundColor: 'green',
        },
      }}
    />
  );
};
export default memo(VerticalProgress)