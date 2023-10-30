import { useMemo } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLogicOperator,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import EmptyTableOverlay from '../components/EmptyTable';
import TableSearch from "../components/TableSearch";


const VISIBLE_FIELDS = ['name', 'email', 'phone', 'rating'];

export default function FixedSizeGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 500,
  });

  const columns = useMemo(
    () =>
      data.columns
        .filter((column) => VISIBLE_FIELDS.includes(column.field))
        .map((column) => ({ ...column, flex: 0.25 })),
    [data.columns],
  );

  /*const columns: GridColDef[] = [
      {
        field: 'date',
        headerName: 'Year',
        renderCell: (params: GridRenderCellParams<any, Date>) => (
          <strong>
            {params.value.getFullYear()}
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              tabIndex={params.hasFocus ? 0 : -1}
            >
              Open
            </Button>
          </strong>
        ),
      },
    ];*/ /*{
        field: 'actions',
            type: 'actions',
        width: 80,
        getActions: (params) => [
        <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
        />,
        <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
        />,
        <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
        />,
    ],
    },*/

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
          filter: {
            ...data.initialState?.filter,
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLogicOperator.Or,
            },
          },
        }}
        columns={columns}
        autoHeight
        disableColumnMenu
        disableRowSelectionOnClick
        /*loading*/
        pageSizeOptions={[10]}
        rowSelection={false}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
        slots={{
          noRowsOverlay: EmptyTableOverlay,
          toolbar: TableSearch,
        }}
      />
    </Box>
  );
}
