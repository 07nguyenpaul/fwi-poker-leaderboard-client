import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import Flag from 'react-world-flags'

export const Player = ({ country, earnings, firstName, handleClick, id, index, lastName }) => (
  <TableRow hover onClick={e => handleClick(e, id, firstName, lastName, earnings, country)}>
    <TableCell component="th" scope="row" className="Player--row__name">
      {index + 1}. {firstName} {lastName}
    </TableCell>
    <TableCell align="right" className="Player--row__winnings">
      {'$ ' + parseInt(earnings).toLocaleString("en")}
    </TableCell>
    <TableCell align="right" className="Player__table--country">
      <Flag className="flag" code={country}/>
      <span>{country}</span>
    </TableCell>
  </TableRow>
)


export default Player;
