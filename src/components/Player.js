import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import Flag from 'react-world-flags'

export const Player = ({ country, earnings, firstName, index, lastName }) => (
  <TableBody>
    <TableRow>
      <TableCell component="th" scope="row">
        {index + 1}. {firstName} {lastName}
      </TableCell>
      <TableCell align="right">
        {'$ ' + earnings.toLocaleString("en")}
      </TableCell>
      <TableCell align="right" className="player__table--country">
        <Flag className="flag" code={country}/>
        <span>{country}</span>
      </TableCell>
    </TableRow>
  </TableBody>
)

export default Player;
