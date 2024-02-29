import {React, useState} from 'react';
// import PRODUCTS from '../stores/PRODUCT';
// import Products from '../components/Products';

function UpdateForm({product, setList, list}) {
    const[updateProduct, setUpdateProduct] = useState(product);
    function update(event){
        event.preventDefault();
        // for(let i = 0; i < list.length; i++){
        //     console.log(list[i]);
        //     if(list[i].id === updateProduct.id){
        //         list[i] = updateProduct;
        //     }
        // }
        const newList = list.map(item => {
            if(item.id === updateProduct.id){
                return updateProduct;
            } else {
                return item;
            }
        });
        setList(newList);
    }
    function hideForm(){
        alert('Successfully updated product');
        // setShowForm(false);
    }
    return(
        <div>
        {
            (
                <div id="updateForm">
                    <h2>Update Product Information</h2>
                    <form action="#" method="POST">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={(event)=> setUpdateProduct({...updateProduct, "name": event.target.value})} required/>
                    </div>
                    <div>
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(event)=> setUpdateProduct({...updateProduct, "quantity": event.target.value})} required/>
                    </div>
                    
                    <div>
                        <label for="price">Price:</label>
                        <input type="number" id="price" name="price" onChange={(event)=> setUpdateProduct({...updateProduct, "price": event.target.value})} required/>
                    </div>
                    <div>
                        <label for="createDate">Create Date:</label>
                        <input type="date" id="createDate" name="createDate" onChange={(event)=> setUpdateProduct({...updateProduct, "createDate": event.target.value})} required/>
                    </div>
                    <div>
                        <input type="submit" value="Update" onClick={(event) => {update(event); hideForm();}}/>
                        <button type="button">Close</button>
                    </div>
                    
                    </form>
                </div>
                        )
                    }
        {/* <script>
        function closeForm() {
        document.getElementById("updateForm").reset(); // Reset form fields
        document.getElementById("updateForm").style.display = "none"; // Hide form
        }
        </script> */}
        </div>
    )
}
export default UpdateForm;