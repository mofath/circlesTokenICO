import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';

const InvestmentsTable = ({investmentTableData}) => {
  console.log(
    '🚀 ~ file: index.js ~ line 11 ~ InvestmentsTable ~ investmentTableData',
    investmentTableData,
  );
  return (
    <AppTableContainer>
      <Table className='table'>
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody
          sx={{
            borderBottom: '0 none',
          }}
        >
          {investmentTableData.map((row, index) => (
            <TableItem row={row} key={index} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default InvestmentsTable;

InvestmentsTable.defaultProps = {
  investmentTableData: [],
};

InvestmentsTable.propTypes = {
  investmentTableData: PropTypes.array,
};
