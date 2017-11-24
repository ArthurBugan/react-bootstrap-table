/* eslint-disable */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'oton-bootstrap-table';

export default class RemotePaging extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BootstrapTable data={ this.props.data } remote={ true } pagination={ true } keyBoardNav
                      fetchInfo={ { dataTotalSize: this.props.totalDataSize } }
                      options={ { sizePerPage: this.props.sizePerPage,
                                  onPageChange: this.props.onPageChange,
                                  sizePerPageList: [ 5, 10 ],
                                  page: this.props.currentPage,
                                  oldPage: this.props.oldPage,
                                  onRowClick: (row) => console.log(row),
                                  onSizePerPageList: this.props.onSizePerPageList } }
                      selectRow={{ clickToSelect: true}}>

        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
