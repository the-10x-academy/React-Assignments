function ProductList(props) {
    const{object}=props
    return (
      <div className="ProductList">
        <div className='img1' ><img src={object.image} alt='profileimg' /></div>
        <div className="text3">
            <h1 className="product_name">{object.product_name}</h1>
            <h2 className="product_description">{object.product_description}</h2>
        </div>
      </div>
    );
  }
export default ProductList;