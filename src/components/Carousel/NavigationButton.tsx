import React, { useRef } from "react";
import { Button, Stack, IconButton, Tooltip } from "@mui/material";
import { useSwiper } from "swiper/react";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";

export default function NavigationButton() {
  const swiper = useSwiper();

  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="end"
      sx={{
        marginRight: 5,
      }}
    >
      <Tooltip title="Prev" arrow placement="left">
        <IconButton onClick={() => swiper.slidePrev()} className="text-black text-lg">
          <ArrowCircleLeftTwoToneIcon color="primary" sx={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next" arrow placement="right">
        <IconButton onClick={() => swiper.slideNext()} className="text-black">
          <ArrowCircleRightTwoToneIcon color="primary" sx={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
