import Box from '@mui/material/Box';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';

const TableSearch = () => (
  <Box
    sx={{
      m: 2,
      textAlign: 'start',
    }}
  >
    <GridToolbarQuickFilter
      sx={{ width: '100%' }}
      quickFilterParser={(searchInput: string) =>
        searchInput
          .split(',')
          .map((value) => value.trim())
          .filter((value) => value !== '')
      }
    />
  </Box>
);

export default TableSearch;
