import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Tooltip, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import LoginDialog from './LoginDialog';
import { useAppDispatch, useAppSelector } from 'store/store';
import { clearUser } from 'reducers/userSlice';
import AccountAvatar from './AccountAvatar';

const HeaderController: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user)

  const [open, setOpen] = React.useState(false);

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleLogoutClick = () => {
    dispatch(clearUser()); 
    localStorage.removeItem('user');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bugs and Suggestions
          </Typography>
          {user.token ? (
            <AccountAvatar user={user} />
          ) : (
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default HeaderController;
