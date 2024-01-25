import { useState } from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material"
import { UserModel } from "models/models"
import AccountMenu from "./AccountMenu";

interface AccountButtonProps {
  user: UserModel;
}

const AccountAvatar: React.FC<AccountButtonProps> = ({
  user,
}: AccountButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={user.username}>
        <IconButton
          onClick={handleProfileClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={isOpen ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
        >
          <Avatar alt={user.username ?? ""} src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Tooltip>
      <AccountMenu 
        anchorEl={anchorEl}
        isOpen={isOpen}
        onClose={onCloseMenu}
      />
    </>
  )
}

export default AccountAvatar;