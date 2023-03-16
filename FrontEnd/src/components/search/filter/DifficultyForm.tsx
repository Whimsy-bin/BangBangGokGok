import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import styled from "styled-components";

export default function DifficultyForm() {
  const [value, setValue] = useState([1, 5]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Wrapper>
      <InputLabel id="difficulty-slider" sx={labelStyle}>
        난이도
      </InputLabel>
      <div style={{ width: "70%" }}>
        <Slider
          id="difficulty-slider"
          color="info"
          size="small"
          min={1}
          max={5}
          step={0.5}
          marks
          valueLabelDisplay="auto"
          value={value}
          onChange={handleChange}
          disableSwap
        />
      </div>
    </Wrapper>
  );
}

const minDistance = 0.5;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  border-radius: 10px;
  color: white;
`;

const labelStyle = {
  fontSize: "1.7rem",
  fontWeight: "600",
  color: "white",
  marginRight: "1rem",
};
