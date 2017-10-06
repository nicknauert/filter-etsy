import React, {Component} from 'react';
import {connect} from 'react-redux'


import Product from "../components/Product";

class ProductList extends Component {



    componentDidUpdate(){
      console.log(this.props);
    }

    render() {
        const { products } = this.props;
        return (
            <ul className="ProductList">
              { products.map((product)=>{
                return <Product product={product} />
              })}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default

const mapStateToProps = function(state) {
  return {products: state.products}
}



export default connect(mapStateToProps)(ProductList);
