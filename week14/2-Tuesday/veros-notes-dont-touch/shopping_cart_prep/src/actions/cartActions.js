

//product: id, productName, price

export const addProduct = (product) => {

    return {
        type: "ADD_PRODUCT",
        data: product
    }
}

//product should be unique id
export const deleteProduct = (product) => {

    return {
        type: "DELETE_PRODUCT",
        data: product
    }
}