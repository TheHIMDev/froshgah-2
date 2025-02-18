import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8001"
})

// in baraye safhe store
export async function getProducts() {
    const {data} = await client("/products")

    return data
    
}

// in baraye safhe product
export async function getProduct(id: string | number) {
    const {data} = await client(`/products/${id}`)

    return data
}