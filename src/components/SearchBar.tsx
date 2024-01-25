import * as React from 'react';
import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onChange: (value: string) => void | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Describe your issue or suggestion"
        inputProps={{ 'aria-label': 'describe your issue or suggestion' }}
        onChange={handleInputChange}
      />
      <SearchIcon />
    </Paper>
  );
};

export default SearchBar;
