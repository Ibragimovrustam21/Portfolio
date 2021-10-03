import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('25 Project', 'fas fa-check', ' fas fa-check', 'fas fa-check'),
  createData('100 Project', 'fas fa-check', 'fas fa-check', 'fas fa-check'),
  createData('Unlimited', 'fas fa-check', ' fas fa-times', 'fas fa-check'),
  createData('10 mySQl Database', 'fas fa-times', ' fas fa-check', 'fas fa-times'),
  createData('25 mySQl Database', 'fas fa-times', ' fas fa-check', 'fas fa-check'),
  createData('50 mySQl Database', 'fas fa-times', ' fas fa-check', 'fas fa-check'),
  createData('100 mySQl Database', 'fas fa-times', ' fas fa-check', 'fas fa-check'),

];

export const TablePricing = () => {
  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#f4f4f4', border: '0px', borderRadius: '0px', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
            <TableCell ></TableCell>
            <TableCell align="right"><strong>Basic</strong></TableCell>
            <TableCell align="right"><strong>Agency</strong></TableCell>
            <TableCell align="right"><strong>Advanced</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='table-row'
            >
              <TableCell component="th" scope="row">
                <strong>{row.name}</strong>
              </TableCell>
              <TableCell align="right"><span className={row.calories} /></TableCell>
              <TableCell align="right"><span className={row.fat} /></TableCell>
              <TableCell align="right"><span className={row.carbs} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}