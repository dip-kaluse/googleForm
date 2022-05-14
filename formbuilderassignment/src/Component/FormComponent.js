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
import React, { useState, useEffect } from "react";
let arr = [];
let checks = [];
let checks2 = [];
function FormComponent(props) {
  const [arrayOfFiled, setArrayOfFiled] = useState(props.arrayOFComponent);
  const [count, setCount] = useState(0);
  const [tomp, setTomp] = useState("");
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
  //   console.log(arr);
  //   console.log(props.arrayOFComponent);
  return (
    <Grid>
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
  );
}

export default FormComponent;
