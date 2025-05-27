import { useEffect, useState } from "react"
import { getProducts } from "../sevices/api"
import { Product } from "../Type/servers"
import { useShoppingCartContext } from "../context/useShoppingCartContext";



export function useTotalPriceCalculator() {
    // لیست کل محصولات رو میگیره  [{id:1,price:""}]
    const [products, setProducts] = useState<Product[]>([]);
    // لیست سبد خزید [{id:1,qty:2}]
    const { cartItems } = useShoppingCartContext();

    useEffect(() => {
        getProducts().then(res => setProducts(res));
    }, []);

    // محاسبه قیمت کل
    const totalPrice = cartItems.reduce((total, item) => {
        const itemInfo = products.find(product => product.id === item.id);

        // اگر itemInfo وجود داشته باشد، قیمت را محاسبه کنید
        if (itemInfo) {
            return total + (item.qty * itemInfo.price);
        }
        
        // اگر itemInfo وجود نداشته باشد، مقدار total را بدون تغییر برگردانید
        return total;
    }, 0);

    return totalPrice;
}

