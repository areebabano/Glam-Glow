"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FormData } from "../types/types";
import { FaShoppingCart } from "react-icons/fa";
import InputField from "../../components/InputField";
// import DropDown from "../components/DropDown";
import { FiCheckCircle } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { LuShoppingBasket } from "react-icons/lu";

// Define the checkout component
const Checkout = () => {
  const router = useRouter();
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // Section and box-shadow styling for uniform look
  const sectionStyle =
    "bg-gray-100 p-6 rounded-lg shadow-md mb-12 transition-shadow duration-300 hover:shadow-lg";
  const shadowStyle = {
    boxShadow: "0 4px 10px rgba(22, 52, 52)",
  };

  // State for formData, errors and success message
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes and specific formatting for card fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ");
      setFormData((prevData) => ({
        ...prevData,
        cardNumber: formattedValue,
      }));
    } else if (name === "cardExpiry") {
      // automatically format the card expiry field
      let formattedValue = value.replace(/\//g, "");
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
          2
        )}`;
      }
      setFormData((prevData) => ({
        ...prevData,
        cardExpiry: formattedValue,
      }));
    } else if (name === "cardCVC") {
      if (value.length > 3) {
        setFormData((prevData) => ({
          ...prevData,
          cardCVC: value.slice(0, 3),
        }));
      } else {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Validate form fields and submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // error handling
    const newErrors: { [key: string]: string } = {};

    // field validations
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required.";
    else {
      const cardNumberNoSpaces = formData.cardNumber.replace(/\s/g, "");
      if (cardNumberNoSpaces.length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits.";
      }
    }
    if (!formData.cardExpiry) {
      newErrors.cardExpiry = "Card expiry is required.";
    } else {
      const [month, year] = formData.cardExpiry.split("/");
      if (
        !month ||
        !year ||
        isNaN(parseInt(month)) ||
        isNaN(parseInt(year)) ||
        parseInt(month) < 1 ||
        parseInt(month) > 12 ||
        new Date(`20${year}-${month}`) < new Date()
      ) {
        newErrors.cardExpiry = "Card expiry must be a valid future date.";
      }
    }
    if (!formData.cardCVC) newErrors.cardCVC = "CVC is required.";
    else if (formData.cardCVC.length !== 3) {
      newErrors.cardCVC = "CVC must be 3 digits.";
    }

    // Show success message if no errors
    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Checkout Successfully! Thank you for your purchase.");
      // Clear form fields
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cardNumber: "",
        cardExpiry: "",
        cardCVC: "",
      });
      setErrors({});
    } else {
      // Clear errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl font-bold mb-8 text-white flex items-center glow-text"
          data-aos="fade-right"
        >
          <FaShoppingCart
            className="w-8 h-8 text-teal-900 mr-2"
            aria-hidden="true"
          />
          Finalize Your Order
        </h1>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}

        {/* Submission Form  */}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* shipping Information fields  */}
          <section
            className={`${sectionStyle}`}
            style={shadowStyle}
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                error={errors.name}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                error={errors.email}
              />
              <InputField
                label="Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                error={errors.phoneNumber}
              />
              <InputField
                label="Country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                error={errors.country}
              />
              <InputField
                label="City"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                error={errors.city}
              />
              <InputField
                label="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="For Example: House# 123, Street# 123 ABC Road."
                error={errors.address}
              />
              <InputField
                label="Postal Code"
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter your postal code"
                error={errors.postalCode}
              />
            </div>
          </section>
          <section
            className={`${sectionStyle}`}
            style={shadowStyle}
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Card Number"
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Enter your card number"
                error={errors.cardNumber}
              />
              <InputField
                label="Card Expiry (MM/YY)"
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                placeholder="Enter card expiry"
                error={errors.cardExpiry}
              />
              <InputField
                label="CVC"
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
                placeholder="Enter CVC"
                error={errors.cardCVC}
              />
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => router.push("/")} // Redirect to the home page
                className="flex justify-center items-center btn w-full p-2 font-bold text-white rounded gap-2"
              >
                Continue Shopping
                <LuShoppingBasket className="w-6 h-6" />
              </button>
              <button
                type="submit"
                className="flex justify-center items-center btn w-full p-2 font-bold text-white rounded gap-2"
              >
                Place Order
                <FiCheckCircle className="w-6 h-6" />
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
