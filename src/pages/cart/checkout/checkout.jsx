import React, { useState } from "react";
import "./checkout.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

// REDUX
import {
  incrementQuantity,
  decrementQuantity,
  delProductFromCart,
} from "../../../Redux/slices/cartSlice";
import { passingCustomerInfo } from "../../../Redux/slices/customerInfo";
import { useSelector, useDispatch } from "react-redux";

// FORM VALIDATION
import { useFormik } from "formik";
import * as Yup from "yup";

// ALERT
import Alert from "../../../global/alert/alert";
import { Toast } from "bootstrap";

const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  // form validation
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is Required"),
    sName: Yup.string().required("Second Name is Required"),
    address: Yup.string().required("Address is Required"),
    phone: Yup.number().required("Phone is Required"),
    notes: Yup.string().required("Our Best chefs Will read your message:)"),
  });
  const formik = useFormik({
    initialValues: {
      fName: "",
      sName: "",
      address: "",
      phone: "",
      notes: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        passingCustomerInfo({
          fullName: `${values.fName} ${values.sName}`,
          address: `${values.address}`,
          phone: `${values.phone}`,
        })
      );
      setCustomerName(values.fName);
      handleAlert();
      setValidForm(true);
      values.fName = "";
      values.sName = "";
      values.address = "";
      values.phone = "";
      values.notes = "";
    },
  });

  // ALERT
  const [startCount, setStartCount] = useState(5);
  const [customerName, setCustomerName] = useState("");
  const [validForm, setValidForm] = useState(false);
  const navigate = useNavigate();
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  if (validForm) {
    const holder = setInterval(() => {
      setStartCount(startCount - 1);
      if (startCount === 0) {
        clearInterval(holder);
        navigate("/payment", { replace: true });
      }
    }, 1000);
  }

  return (
    <div className="checkoutPage-container">
      <div className="checkout-PathSec px-4 py-5">
        <h1>check out</h1>
        <nav className="mt-2">
          <NavLink to="/" className="prevLink">
            home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/cart" className="prevLink">
            cart
          </NavLink>{" "}
          /{" "}
          <NavLink to="/checkout" className="currLink">
            check out
          </NavLink>
        </nav>
      </div>
      {/* =================================== */}
      <div className="checkOut-main-sec row">
        <div className="checkout-main-leftSide px-3 px-md-5 py-4 col-md-6">
          <h3>contact details</h3>
          <form action="#" className="d-flex flex-column">
            <div>
              <input
                type="text"
                name="first name"
                placeholder="First name"
                {...formik.getFieldProps("fName")}
              />
              {formik.touched.fName && formik.errors.fName && (
                <div className="text-danger">{formik.errors.fName}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="last name"
                placeholder="Last name"
                {...formik.getFieldProps("sName")}
              />
              {formik.touched.sName && formik.errors.sName && (
                <div className="text-danger">{formik.errors.sName}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-danger">{formik.errors.address}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-danger">{formik.errors.phone}</div>
              )}
            </div>
            <div>
              <textarea
                name="order notes"
                rows="5"
                placeholder="Order notes"
                {...formik.getFieldProps("notes")}
              />
              {formik.touched.notes && formik.errors.notes && (
                <div className="text-danger">{formik.errors.notes}</div>
              )}
            </div>
          </form>
        </div>
        <div className="checkout-main-rightSide px-3 px-md-5 py-4 col-md-6">
          <h3>your order</h3>
          <div className="checkout-order-sec">
            <table>
              <tr>
                <th>product</th>
                <th>&nbsp;</th>
                <th>qty</th>
                <th>&nbsp;</th>
              </tr>
              {cartProducts.map((pro, indx) => {
                const productInfo = {
                  name: pro.name,
                  id: pro.id,
                  img: pro.img,
                  price: pro.price,
                  kcal: pro.kcal,
                  fat: pro.fat,
                  saturates: pro.saturates,
                  sugars: pro.sugars,
                  salt: pro.salt,
                  description: pro.desc,
                  category: pro.category,
                };

                return (
                  <tr key={indx}>
                    <td>
                      <NavLink
                        to={`/productDetails/:${pro.name?.replaceAll(
                          " ",
                          "-"
                        )}`}
                        state={{ from: { productInfo } }}
                      >
                        <img src={pro.img} alt={pro.name} />
                      </NavLink>
                    </td>
                    <td className="main-color-green">
                      <NavLink
                        className="main-color-green"
                        to={`/productDetails/:${pro.name?.replaceAll(
                          " ",
                          "-"
                        )}`}
                        state={{ from: { productInfo } }}
                      >
                        {pro.name}
                      </NavLink>
                    </td>
                    <td className="checkout-order-qty-sec">
                      <button
                        onClick={() =>
                          dispatch(decrementQuantity({ id: pro.id }))
                        }
                      >
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </button>
                      <span className="main-color-green">{pro.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(incrementQuantity({ id: pro.id }))
                        }
                      >
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          dispatch(delProductFromCart({ id: pro.id }))
                        }
                      >
                        <FontAwesomeIcon icon={faX} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="check-order-del-sec d-flex justify-content-between mt-1 mb-3">
            <h5>DELIVERY</h5>
            <p>from 5 to 8 km delivery</p>
          </div>
          <div className="check-order-total-sec d-flex justify-content-between mb-3">
            <h5 className="t-title">TOTAL :</h5>
            <p className="t-cost">{`$${Number(Number(total) + 10).toFixed(
              2
            )}`}</p>
          </div>
        </div>
      </div>
      {/* ======================================== */}
      <div className="checkout-bottom-nav-sec d-flex justify-content-between px-3 px-md-5 py-5">
        <button>
          <NavLink to="/cart">return to cart</NavLink>
        </button>
        <button onClick={formik.handleSubmit} type="submit">
          <NavLink>continue to payment</NavLink>
        </button>
      </div>
      <Alert
        ref={alertParent}
        msg={`Success ${customerName} You'll Redirect To Payment In ${startCount}s`}
      />
    </div>
  );
};

export default Checkout;
