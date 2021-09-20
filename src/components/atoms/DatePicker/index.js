import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  return (
    <DatePickerStyled noValidate>
      <TextField
        InputProps={{ inputProps: { min: '2020-05-01', max: '2020-05-04' } }}
        id="date"
        type="date"
        defaultValue={
          new Date().getDate() +
          '-' +
          (new Date().getMonth() + 1) +
          '-' +
          new Date().getFullYear()
        }
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
