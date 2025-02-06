import './catalog.css';
import Product from '../components/product';

function Catalog() {
    return (
        <div className="catalog container mt-5">
            <h1 className="text-center mb-4 text-success">Check Out Our Fresh Catalog</h1>
            <div className="row g-4">
                <div className="col-md-4 col-lg-3">
                    <Product />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Product />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Product />
                </div>
                <div className="col-md-4 col-lg-3">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
