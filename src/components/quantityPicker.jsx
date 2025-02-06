import { useState } from 'react';
import './quantityPicker.css'

function QuantityPicker() {
    const [quantity, setQuantity] = useState(0);

    function increase() {
        const value = quantity + 1;
        setQuantity(value);
    }

    function decrease() {
        if(quantity > 0) {
            const value = quantity - 1;
            setQuantity(value);
        }
    }

    return (
        <div className="quantity-picker">
            <button className='btn btn-sm btn-outline-success' disabled={quantity === 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-outline-success' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;