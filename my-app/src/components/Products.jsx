// import React from 'react';
import React, {useState} from 'react';
import PRODUCTS from '../stores/PRODUCT';
import ProductDetail from './ProductDetail';
import UpdateForm from './UpdateForm';

function Products(){
    const[productDetail, setProductDetail] = useState(null);
    const[productList, setList] = useState(PRODUCTS.PRODUCTS);
    const[updateProduct, setUpdateProduct] = useState(null);

    function handleDelete(deleteProduct) {
        const newList = productList.filter((p) => p.id !== deleteProduct.id);                                                    
        console.log(newList);
        // if(productDetail && productDetail.id === deleteProduct.id){
        //     setProductDetail(null);
        // }
        setList(newList);
    }

    function handleUpdate(updateProduct) {
        setUpdateProduct(updateProduct);
    }

    // console.log("state ", productDetail);            
    function showDetail(pou)  {                                 
        setProductDetail(pou);
    }

    
    return(
        <><div className='product-list'>
            {productList.map((p) => (
                <div key={p.id} className='product-infor'>
                    <div className='default-img'>
                        <img src={p.image} alt="product-image" />
                    </div>
                    <div>{p.name}</div>
                    <button onClick={() => showDetail(p)}>Show details</button>
                </div>
            ))}
        </div>
            <button>Add new product</button>
        <div>
                {productDetail !== null ?
                <ProductDetail product={productDetail} onDelete={handleDelete} onUpdate={handleUpdate}></ProductDetail> : ""}
        </div>
        <div>
            {
                updateProduct !== null ?
                    <UpdateForm product={updateProduct} setList={setList} list={productList}></UpdateForm> : ""
            }
        </div>
        </>
    )
}

export default Products;