/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'oton-bootstrap-table';


export default class SimpleNavTable extends React.Component {
	constructor(props) {
  super(props);
  this.state = { products: [] };
  this.addProducts = this.addProducts.bind(this);
	}

	addProducts(quantity) {
  const products = [];
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
  this.setState({ products });
	}

	componentDidMount() {
  setInterval(() => {
    this.addProducts(Math.floor((Math.random() * 10) + 1));
  }, 8000);
	}

  render() {
    const selectRowProp = { mode: 'radio', hideSelectColumn: true, clickToSelect: true, onSelect: this.props.onRowSelect };

    return (
      <BootstrapTable
				selectRow={ selectRowProp }
 				data={ this.state.products }
				remote
				id={ this.props.id }
				pagination
				fetchInfo={ { dataTotalSize: this.state.products.length } }
				keyBoardNav={ { clickToNav: true } }
				options={ { onRowClick: () => null, sizePerPage: 5 } }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
