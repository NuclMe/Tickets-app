import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRANSFER_OPTIONS } from '../../const';
import { setTransferFilter } from '../../redux/ducks/tickets/tickets';
import type { RootState } from '../../redux/root-reducer';
import { device, fontSizes } from '../../styledVars';

export const Transfer: FC = () => {
  const dispatch = useDispatch();
  const selectedTransfer = useSelector(
    (state: RootState) => state.tickets.selectedTransfer
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid lightgray',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
        backgroundColor: 'white',
        flex: '1',
        padding: '20px 0',
        maxHeight: '340px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginLeft: '20px',
          marginBottom: '10px',
          fontSize: fontSizes.base,
          [`${device.tablet}`]: {
            fontSize: fontSizes.xs,
          },
        }}
      >
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Typography>
      <Formik
        initialValues={{ transfer: selectedTransfer || 'all' }}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(setTransferFilter(values.transfer));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form style={{ width: '100%', overflow: 'hidden' }}>
            <FormGroup>
              {TRANSFER_OPTIONS.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Field
                      as={Radio}
                      type="radio"
                      name="transfer"
                      value={option.value}
                      checked={String(values.transfer) === String(option.value)}
                      onChange={() => {
                        setFieldValue('transfer', option.value);
                        dispatch(setTransferFilter(option.value));
                      }}
                    />
                  }
                  label={option.label}
                  sx={{
                    width: '100%',
                    paddingLeft: '20px',
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    marginRight: '0px',
                    marginLeft: '0px',
                    '&:hover': {
                      backgroundColor: 'rgba(173, 216, 230, 0.4)',
                    },
                    [`${device.tablet}`]: {
                      '& .MuiTypography-root': {
                        fontSize: fontSizes.xs,
                      },
                    },
                  }}
                />
              ))}
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
