import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lookupEditCell: {
    paddingTop: theme.spacing.unit * 0.875,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
});

const RemoteLookupEditCellBase = ({
  value, onValueChange, classes, lookupList,
}) => (
  <TableCell
    className={classes.lookupEditCell}
  >
    <Select
      value={value}
      onChange={event => onValueChange(event.target.value)}
      input={(
        <Input
          classes={{ root: classes.inputRoot }}
        />
      )}
    >
      {lookupList.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {lookupList.find(p => p.id === item.id).title}
        </MenuItem>
      ))}
    </Select>
  </TableCell>
);
export default withStyles(styles)(RemoteLookupEditCellBase);
