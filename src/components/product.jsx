import './product.css';
import QuantityPicker from './quantityPicker';

function Product() {
    return (
        <div className="card product">
            <img
                src="https://picsum.photos/280/200"
                className="card-img-top"
                alt="Product"
            />
            <div className="card-body text-center">
                <h5 className="card-title text-primary">Product Title Here</h5>
                <p className="card-text text-muted">$100</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <QuantityPicker />
                    <button className="btn btn-sm btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
