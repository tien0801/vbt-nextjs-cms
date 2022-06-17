import * as React from 'react';
import { Paper, Typography, Button, Box, Stack, CircularProgress } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selectIsLogging } from '../authSlice';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);

  const handleLoginClick = () => {
    // TO DO: Get username + pw from login from
    dispatch(authActions.login({
      username: '',
      password: '',
    }))
  }

  return (
    <div>
      <Stack sx={{ display: 'flex', flexFlow: 'row nowrap', textAlign: 'center' }} alignItems="center" justifyContent='center' minHeight='100vh'>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant='h5' component='h1'>
            Student Management
          </Typography>

          <Box mt={3}>
            <Button variant='contained' onClick={handleLoginClick}>
              {isLogging && <CircularProgress size={20} color='warning' />}
              Fake Login
            </Button>
          </Box>
        </Paper>
      </Stack>
    </div >
  );
}
