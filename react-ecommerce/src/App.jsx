import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Views/HomeView/Home";
import ProductView from "./Views/ProductView/ProductView";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Utils/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartView from "./Views/CartView/CartView";
import SignInView from "./Views/SignIn/SignInView";
import ShippingAddressView from "./Views/ShippingAddressView/ShippingAddressView";
import SignUpView from "./Views/SignUp/SignUpView";
import PaymentMethodVw from "./Views/PaymentMethodView/PaymentMethodVw";
import PlaceOrderVw from "./Views/PlaceOrderView/PlaceOrderVw";
import OrderDetailView from "./Views/OrderDetail/OrderDetailView";
import OrderHistoryView from "./Views/OrderDetail/OrderHistoryView";
import ProfileView from "./Views/Profile/ProfileView";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>ECommerce Test Website</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/signin" element={<SignInView />} />
              <Route path="/signup" element={<SignUpView />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/shipping" element={<ShippingAddressView />} />
              <Route path="/payment" element={<PaymentMethodVw />} />
              <Route path="/placeorder" element={<PlaceOrderVw />} />
              <Route path="/order/:id" element={<OrderDetailView />} />
              <Route path="/orderhistory" element={<OrderHistoryView />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
