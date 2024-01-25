import { Bookmark, Logout } from "@mui/icons-material";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import { clearUser } from "reducers/userSlice";
import { useAppDispatch } from "store/store";

interface AccountMenuProps {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  onClose: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
  anchorEl,
  isOpen,
  onClose,
}: AccountMenuProps) => {
  const dispatch = useAppDispatch();

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isOpen}
      onClose={onClose}
      onClick={onClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <Bookmark fontSize="small" />
        </ListItemIcon>
        Saves
      </MenuItem>
      <MenuItem onClick={() => {
        onClose(); 
        localStorage.removeItem('user');
        dispatch(clearUser()); 
      }}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default AccountMenu;