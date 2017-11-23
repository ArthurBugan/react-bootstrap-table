/* eslint-disable */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'oton-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(75);

const options = {
  onRowClick: () => console.log('clicou!')
}

export default class PaginationNavTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } pagination keyBoardNav options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
