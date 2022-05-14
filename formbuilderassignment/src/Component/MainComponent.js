import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import FormComponent from "./FormComponent";
let arr = [];
let checks = [];
let checks2 = [];
function MainComponent() {
  const [fieldInput, setFieldInput] = useState("");
  const [CheckedValue, setCheckedValue] = useState("");
  const [fieldLabel, setFieldLabel] = useState("");
  const [option, setOption] = useState("");
  const [nameOfField, setNameOfField] = useState("");
  const [arrayOfFiled, setArrayOfFiled] = useState([]);
  const [count, setCount] = useState(0);
  const [arrayAfterSubmit, setArrayAfterSubmit] = useState([]);
  const [tomp, setTomp] = useState("");
  const handleSubmit = () => {
    let temp = {
      label: fieldLabel,
      fieldInputs: fieldInput,
      name: nameOfField,
      options: option,
    };
    setArrayOfFiled((prevState) => [...prevState, temp]);
    setFieldLabel("");
    setFieldInput("");
    setOption("");
    setNameOfField("");
    setCount((prev) => prev + 1);
  };
  const handleOnchange = (event) => {
    const allFruits = Object.assign({}, ...arr);
    console.log(allFruits);
  };
  useEffect(() => {}, [count]);
  //   console.log(arrayAfterSubmit);
  const handlecheckOpt = (ind, myarr) => {
    if (checks[ind] == "on") {
      checks2[ind] = myarr[ind];
      return true;
    }
  };
  console.log(arr);

  //   console.log(tomp);
  return (
    <Container>
      <Grid
        xs={12}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid xs={6} sx={{ border: "2", marginTop: "2%" }}>
          <Grid xs={6} style={{ width: "100%" }}>
            {" "}
            <TextField
              fullWidth
              id="outlined-required"
              label="Label"
              onChange={(e) => setFieldLabel(e.target.value)}
            />
          </Grid>
          <Grid xs={6} style={{ marginTop: "10px", width: "50%" }}>
            {" "}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Field Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fieldInput}
                label="Field Type"
                onChange={(e) => {
                  setFieldInput(e.target.value);
                }}
              >
                <MenuItem value={"text"}>Text</MenuItem>
                <MenuItem value={"textarea"}>Textarea</MenuItem>
                <MenuItem value={"select"}>Select</MenuItem>
                <MenuItem value={"checkbox"}>Checkbox</MenuItem>
                <MenuItem value={"radio"}>Radio</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} style={{ width: "50%", marginTop: "10px" }}>
            {" "}
            <TextField
              fullWidth
              id="outlined-required"
              label="Name"
              onChange={(e) => {
                setNameOfField(e.target.value);
              }}
            />
          </Grid>
          {fieldInput === "radio" && (
            <Grid xs={6} style={{ marginTop: "8px", width: "50%" }}>
              <TextField
                fullWidth
                id="outlined-required"
                label="option"
                size="small"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              />
            </Grid>
          )}
          {fieldInput === "checkbox" && (
            <Grid xs={6} style={{ marginTop: "8px", width: "50%" }}>
              <TextField
                fullWidth
                id="outlined-required"
                label="option"
                size="small"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              />
            </Grid>
          )}
          {fieldInput === "select" && (
            <Grid xs={6} style={{ marginTop: "8px", width: "50%" }}>
              <TextField
                fullWidth
                id="outlined-required"
                label="option"
                size="small"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              />
            </Grid>
          )}
          <Grid
            xs={6}
            style={{ width: "50%", marginTop: "10px" }}
            container
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Button
              variant="contained"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        {arrayOfFiled.length != 0 && (
          <Grid xs={6} style={{ marginTop: "2%" }}>
            {" "}
            {arrayOfFiled.map((item, index) => {
              //   console.log(item);
              const myArray = item.options.split(",");
              let select;
              return (
                <Grid xs={6}>
                  <InputLabel id="demo-simple-select-label">
                    {item.label}
                  </InputLabel>
                  {item.fieldInputs === "text" && (
                    <Grid xs={12} style={{ marginTop: "10px", width: "100%" }}>
                      <TextField
                        id="filled-basic"
                        variant="filled"
                        onChange={(e) => {
                          const area = {};
                          const temp = item.name;
                          area[temp] = e.target.value;
                          arr[index] = area;
                        }}
                      />
                    </Grid>
                  )}
                  {item.fieldInputs === "textarea" && (
                    <Grid xs={12} style={{ marginTop: "10px", width: "100%" }}>
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        style={{ width: 200 }}
                        onChange={(e) => {
                          const area = {};
                          const temp = item.name;
                          area[temp] = e.target.value;
                          arr[index] = area;
                        }}
                      />
                    </Grid>
                  )}
                  {item.fieldInputs === "select" && (
                    <Grid xs={6} style={{ marginTop: "10px", width: "50%" }}>
                      {" "}
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Field Type"
                          value={tomp}
                          onChange={(e) => {
                            setTomp(e.target.value);
                            const area = {};
                            const temp1 = item.name;
                            area[temp1] = e.target.value;
                            arr[index] = area;
                          }}
                        >
                          {myArray.map((object, index) => {
                            return <MenuItem value={object}>{object}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  )}
                  {item.fieldInputs === "radio" && (
                    <Grid xs={6} style={{ marginTop: "10px", width: "100%" }}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          value={tomp}
                          onChange={(e) => {
                            setTomp(e.target.value);
                            const area = {};
                            const temp1 = item.name;
                            area[temp1] = e.target.value;
                            arr[index] = area;
                          }}
                        >
                          {myArray.map((object, index) => {
                            return (
                              <FormControlLabel
                                value={object}
                                control={<Radio />}
                                label={object}
                              />
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  )}
                  {item.fieldInputs === "checkbox" && (
                    <Grid xs={6} style={{ marginTop: "10px", width: "50%" }}>
                      {myArray.map((object, ind) => {
                        return (
                          <FormControlLabel
                            checked={handlecheckOpt(ind, myArray)}
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              if (isChecked) {
                                checks[ind] = e.target.value;
                                setCount((prev) => prev + 1);
                              } else {
                                checks.splice(ind, 1);
                              }
                              const area = {};
                              const temp1 = item.name;
                              area[temp1] = checks.toString();
                              arr[index] = area;
                            }}
                            label={object}
                            value={object}
                            control={<Checkbox />}
                          />
                        );
                      })}
                    </Grid>
                  )}
                </Grid>
              );
            })}
            <Grid xs={6} style={{ marginTop: "10px", width: "50%" }}>
              <Button variant="contained" onClick={() => handleOnchange()}>
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      {/* <FormComponent arrayOFComponent={arrayOfFiled} /> */}
    </Container>
  );
}

export default MainComponent;
