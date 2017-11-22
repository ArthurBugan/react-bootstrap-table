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

addProducts(5);

export default class SimpleNavTable extends React.Component {
  render() {
    const selectRow = {
      mode: 'checkbox'
    };

    const options = {
      onRowClick: () => console.log('CLOICOU!')
    }

    const keyBoardNav = {
      clickToNav: true
    }
    return (
      <BootstrapTable data={ products } selectRow={ selectRow } keyBoardNav={ keyBoardNav } options={options}>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
