import * as React from 'react';
import {
  SortingState, EditingState, IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableEditRow, TableEditColumn,
  TableFixedColumns,
} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from 'components/CustomButtons/Button.jsx';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

import RemoteLookupEditCell from 'components/RemoteLookupEditCell/RemoteLookupEditCell.jsx';
import { LinkCell } from 'theme-sources/material-ui/components/link-cell';
import CircularProgress from '@material-ui/core/CircularProgress';


const AddButton = ({ onExecute }) => (
  <div style={{ textAlign: 'center' }}>
    <Button
      color="primary"
      onClick={onExecute}
      title="Create new Plan"
      round
    >
      New Plan
    </Button>
  </div>
);

const EditButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Edit row">
    <EditIcon />
  </IconButton>
);

const DeleteButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Delete row">
    <DeleteIcon />
  </IconButton>
);

const CommitButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Save changes">
    <SaveIcon />
  </IconButton>
);

const CancelButton = ({ onExecute }) => (
  <IconButton color="secondary" onClick={onExecute} title="Cancel changes">
    <CancelIcon />
  </IconButton>
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return (
    <CommandButton
      onExecute={onExecute}
    />
  );
};

const getRowId = row => row.id;

class PlansListComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      rows: [],
      allRoles: [],
      allPhases: [],
      sorting: [],
      editingRowIds: [],
      addedRows: [],
      rowChanges: {},
      currentPage: 0,
      deletingRows: [],
      pageSize: 0,
      pageSizes: [5, 10, 0],
      columnOrder: ['title', 'status', 'validity', 'cost'],
      leftFixedColumns: [TableEditColumn.COLUMN_TYPE],
      booleanYesNoTypes: [
        { id: '1', title: 'Active' },
        { id: '0', title: 'Inactive' },
      ],

    };
    const getStateDeletingRows = () => {
      const { deletingRows } = this.state;
      return deletingRows;
    };
    const getStateRows = () => {
      const { rows } = this.state;
      return rows;
    };
    this.changeSorting = sorting => this.setState({ sorting });
    this.changeEditingRowIds = editingRowIds => this.setState({ editingRowIds });
    this.changeAddedRows = addedRows => this.setState({
      addedRows: addedRows.map(row => (Object.keys(row).length ? row : {
        status: this.state.booleanYesNoTypes[0].id,
      })),
    });
    this.changeRowChanges = rowChanges => this.setState({ rowChanges });
    this.changeCurrentPage = currentPage => this.setState({ currentPage });
    this.changePageSize = pageSize => this.setState({ pageSize });
    this.commitChanges = ({ added, changed, deleted }) => {
      let { rows } = this.state;
      if (added) {
        const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
        rows = [
          ...rows,
          ...added.map((row, index) => ({
            id: `${startingAddedId + index}added`,
            ...row,
          })),
        ];
        this.props.createPlan((added)[0]);
      }
      if (changed) {
        rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        this.props.updatePlan(Object.keys(changed)[0], changed[Object.keys(changed)[0]]);
      }
      this.setState({ rows, deletingRows: deleted || getStateDeletingRows() });
    };
    this.cancelDelete = () => this.setState({ deletingRows: [] });
    this.deleteRows = () => {
      const rows = getStateRows().slice();
      getStateDeletingRows().forEach((rowId) => {
        const index = rows.findIndex(row => row.id === rowId);
        this.props.deletePlan(rowId);
        if (index > -1) {
          rows.splice(index, 1);
        }
      });
      this.setState({ rows, deletingRows: [] });
    };
    this.changeColumnOrder = (order) => {
      this.setState({ columnOrder: order });
    };

    this.EditCell = (props) => {
      const { column } = props;
      if (column.name === 'status') {
        return <RemoteLookupEditCell {...props} lookupList={this.state.booleanYesNoTypes} />;
      }
      return <TableEditRow.Cell {...props} />;
    };

    this.Cell = (props) => {
      const { column } = props;

      if (column.name === 'title') {
        return <LinkCell {...props} />;
      }
      if (column.name === 'status') {
        return (
          <TableCell style={props.style}>
            {this.state.booleanYesNoTypes.find(p => p.id === props.value.toString()) === undefined ? '' : this.state.booleanYesNoTypes.find(p => p.id === props.value.toString()).title}
          </TableCell>
        );
      }
      if (column.name === 'cost') {
        return (
          <TableCell style={props.style}>
            {props.value / 100}
          </TableCell>
        );
      }
      return <Table.Cell {...props} />;
    };
  }

  componentDidMount() {
    this.props.getPlans();
  }

  componentWillReceiveProps(props) {
    if (props.refreshPlan) {
      setTimeout(() => {
        this.props.getPlans();
      }, 3000);
    }
    this.setState({
      rows: props.plan_list,
    });
    this.setState({
      columns: [
        { name: 'title', title: 'Title' },
        { name: 'status', title: 'Status' },
        { name: 'validity', title: 'Validity (days)' },
        { name: 'cost', title: 'Cost' },
      ],
      defaultHiddenColumnNames: ['role_id'],
      tableColumnExtensions: [
        { columnName: 'title', width: 250 },
        { columnName: 'status', width: 150 },
        { columnName: 'validity', width: 150 },
        { columnName: 'cost', width: 80 },
      ],
    });
  }

  render() {
    const { classes } = this.props;
    const {
      rows,
      columns,
      tableColumnExtensions,
      sorting,
      editingRowIds,
      addedRows,
      rowChanges,
      deletingRows,
      leftFixedColumns,
    } = this.state;

    return (
      <div>
        {this.props.requesting && <CircularProgress size={44} style={{ position: 'absolute', top: '50%', left: '50%' }} />}
        <Card>
          <CardHeader color="primary" style={{ textAlign: 'left', paddingTop: '30px' }}>
            <b>Plans</b>
          </CardHeader>
          <CardBody>
            <div style={{ color: 'red', textAlign: 'center' }}>{this.props.message}</div>
            <div style={{ color: 'green', textAlign: 'center' }}>{this.props.success_message}</div>
            <Grid
              rows={rows}
              columns={columns}
              getRowId={getRowId}
            >
              <SortingState
                sorting={sorting}
                onSortingChange={this.changeSorting}
              />
              <EditingState
                editingRowIds={editingRowIds}
                onEditingRowIdsChange={this.changeEditingRowIds}
                rowChanges={rowChanges}
                onRowChangesChange={this.changeRowChanges}
                addedRows={addedRows}
                onAddedRowsChange={this.changeAddedRows}
                onCommitChanges={this.commitChanges}
              />

              <IntegratedSorting />

              <Table
                columnExtensions={tableColumnExtensions}
                cellComponent={this.Cell}
              />

              <TableHeaderRow showSortingControls />
              <TableEditRow
                cellComponent={this.EditCell}
              />
              <TableEditColumn
                width={170}
                showAddCommand={!addedRows.length}
                showEditCommand
                showDeleteCommand
                showDetailCommand
                commandComponent={Command}
              />

              <TableFixedColumns
                leftColumns={leftFixedColumns}
              />
            </Grid>

            <Dialog
              open={!!deletingRows.length}
              onClose={this.cancelDelete}
              classes={{ paper: classes.dialog }}
            >
              <DialogTitle>
            Delete Row
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
              Are you sure you want to delete the following row?
                </DialogContentText>
                <Paper>
                  <Grid
                    rows={rows.filter(row => deletingRows.indexOf(row.id) > -1)}
                    columns={columns}
                  >
                    <Table
                      columnExtensions={tableColumnExtensions}
                      cellComponent={this.Cell}
                    />
                    <TableHeaderRow />
                  </Grid>
                </Paper>
              </DialogContent>
              <DialogActions>
                <Button round onClick={this.cancelDelete} color="primary">
              Cancel
                </Button>
                <Button round onClick={this.deleteRows} color="primary">
              Delete
                </Button>
              </DialogActions>
            </Dialog>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PlansListComp;
