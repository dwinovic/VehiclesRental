import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers({ onChange }) {
  const classes = useStyles();

  return (
    <DatePickerStyled noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="0000-00-24T00:00"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
    </DatePickerStyled>
  );
}

const DatePickerStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  .textField {
    width: 100%;
  }
`;
