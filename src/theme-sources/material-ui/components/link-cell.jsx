import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { Link } from "react-router-dom";


const LinkCellBase = ({ row }) => {
  return (
    <TableCell >
      <Link to={`tasks-detail/`+row.id}>{row.title}</Link>
    </TableCell>
  );
};

export const LinkCell = LinkCellBase;

