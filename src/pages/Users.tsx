import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import EmptyTableOverlay from '../components/EmptyTable';

export default function FixedSizeGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 500,
  });

  console.log('66666666666666666666');
  console.log(data);
  console.log('66666666666666666666');

  // Using "phone" instead of "age" for the sake of simplicity
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        {...data}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        columns={[
          { field: 'name', flex: 0.25 },
          { field: 'email', flex: 0.25 },
          { field: 'phone', flex: 0.25 },
          { field: 'rating', flex: 0.25 },
        ]}
        autoHeight
        disableColumnMenu
        disableRowSelectionOnClick
        /*loading*/
        pageSizeOptions={[10]}
        rowSelection={false}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
        slots={{ noRowsOverlay: EmptyTableOverlay }}
      />
    </Box>
  );
}
