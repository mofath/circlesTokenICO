import React from 'react';
import TableCell from '@mui/material/TableCell';
import {Box} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../../shared/constants/AppEnums';
import {shortenAddress} from '../../../../../utils/ShortenAddress';

const TableItem = (props) => {
  const {row} = props;

  return (
    <TableRow
      key={row.name}
      sx={{
        borderBottom: '0 none',
        '& .tableCell': {
          borderBottom: '0 none',
          fontSize: 13,
          padding: 2,
          '&:first-of-type': {
            pl: 5,
          },
          '&:last-of-type': {
            pr: 5,
          },
        },
      }}
      className='item-hover'
    >
      <TableCell align='left' className='tableCell'>
        <Box
          component='span'
          sx={{
            fontWeight: Fonts.REGULAR,
          }}
        >
          {shortenAddress(row.contractAddress)}
        </Box>
      </TableCell>

      <TableCell align='left' className='tableCell'>
        {row.investmentAmount} ETH
      </TableCell>

      <TableCell
        align='left'
        sx={{
          whiteSpace: 'no-wrap',
        }}
        className='tableCell'
      >
        {row.date.toDate().toDateString()}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  row: PropTypes.object.isRequired,
};
