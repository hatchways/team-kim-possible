import React, { useState, useEffect } from "react";
import { Wrapper } from "./styled";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
} from "@material-ui/core";
import Image from "material-ui-image";

const options = [
  {
    name: "breakfast",
    label: "Breakfast included",
  },
  { name: "all", label: "All-inclusive" },
  { name: "villa", label: "Villa" },
  { name: "view", label: "Ocean view" },
  { name: "hotel", label: "Hotel" },
];

const HotelFilter = () => {
  const [state, setState] = useState({
    breakfast: false,
    all: false,
    villa: false,
    view: false,
    hotel: false,
    resort: false,
  });
  const { breakfast, all, villa, view, hotel, resort } = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  useEffect(() => {
    console.log(state);
  });
  return (
    <Wrapper>
      <Container>
        <Image src="/images/map.png" />
        <Typography> View in a map</Typography>
      </Container>
      <FormControl>
        <FormLabel>Filter by:</FormLabel>
        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={state[option.name]}
                  onChange={handleChange}
                  name={option.name}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Wrapper>
  );
};

export default HotelFilter;
