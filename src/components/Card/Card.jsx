import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const App = () => {

                        const [cart, setCart] = useState([]);                
                        const [showCart, setShowCart] = useState(false);    


                        // All products put in the array
                        const products = [
                            { id: 1, name: 'Fancy Product', price: 'Rs.2,40,999',  image:'images/fan_1.jpg' },
                            { id: 2, name: 'Special Item', price: 'Rs.97,78,895', sale: true,image:'images/spl_1.jpg' },
                            { id: 3, name: 'Sale Item', price: 'Rs.1,57,860',  sale: true, image:'images/sale_1.jpg' },
                            { id: 4, name: 'Popular Item', price: 'Rs.14,78,521',  image:'images/pplr_1.jpg' },
                            { id: 6, name: 'Fancy Product', price: 'Rs. 2,17,999',  image:'images/fan_2.jpg' },
                            { id: 7, name: 'Special Item', price: 'Rs. 77,89,999', sale: true, image:'images/spl_2.jpg' },
                            { id: 5, name: 'Sale Item', price: 'Rs. 1,53,899',  sale: true, image:'images/sale_2.jpg' },
                            { id: 8, name: 'Popular Item', price: 'Rs. 15,08,758',  image:'images/pplr_2.jpg' },
                        ];

                        const addToCart = (product) => {
                            setCart([...cart, product]);
                        };

                        const removeFromCart = (product) => {
                            setCart(cart.filter((item) => item.id !== product.id));
                        };

                        const isInCart = (product) => {
                            return cart.some((item) => item.id === product.id);
                        };


  return (
    <div>

    {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>


            {/* Cart Section */}
            <form className="d-flex">

                <button className="btn btn-outline-dark" 
                        type="button" 
                        onClick={() => setShowCart(true)}>

                            <i className="bi-cart-fill me-1"></i> Cart
                
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                        {cart.length}
                            </span>

                </button>

            </form>

            
          </div>
        </div>
      </nav>

      

        {/* header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Raji Shop</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>



        {/* Cart section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {products.map(
                (product) => (
                    <div className="col mb-5" key={product.id}>
                        <div className="card h-100">

                            { product.sale && <div className="badge bg-dark text-white position-absolute" 
                                                    style={{ top: '0.5rem', right: '0.5rem' }}>      Sale   
                                              </div>}

                        <img className="card-img-top" src={product.image} alt={product.name} />

                        <div className="card-body p-4">
                            <div className="text-center">

                                <h5 className="fw-bolder">{product.name}</h5>

                                <div>{product.description}</div>

                                {['Special Item','Popular Item'].includes(product.name) && (
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        </div>
                                ) }

                                 <div>{product.price}</div>

                            </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">

                            {isInCart(product) ? (
                                                    <button className="btn btn-outline-dark mt-auto" 
                                                            onClick={() => removeFromCart(product)}>    Remove from cart
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-outline-dark mt-auto" 
                                                            onClick={() => addToCart(product)}>         Add to cart
                                                    </button>
                                )}

                            </div>
                        </div>
                        </div>
                    </div>
            ))}



          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>

                <button type="button" 
                        className="btn-close" 
                        onClick={() => setShowCart(false)}>
                </button>

              </div>
              <div className="modal-body">

                {cart.length === 0 ? ( <p>Your cart is empty</p> ) : (
                  <ul className="list-group">

                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name}
                        <button className="btn btn-outline-dark btn-sm"     
                                onClick={() => removeFromCart(item)}>       Remove
                        </button>
                      </li>
                    ))}

                  </ul>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" 
                        className="btn btn-secondary" 
                        onClick={() => setShowCart(false)}> Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}



      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </div>
  );
};

export default App;
