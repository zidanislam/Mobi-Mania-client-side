import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { Alert } from "@mui/material";
const AddProduct = () => {
  const [addProduct, setAddProduct] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pendding";
    fetch(`https://radiant-brushlands-53565.herokuapp.com/addproduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setAddProduct(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h2>Add product</h2>
      <form className="shipping-form fs" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Product Name" {...register("name")} />
        <br />

        <input placeholder="Prodcut Price" {...register("price")} />
        <br />
        <input
          placeholder="Product Description"
          defaultValue=""
          {...register("des")}
        />

        <br />
        <input placeholder="Product Img Link" {...register("img")} />
        <br />

        <br />
        <Button type="submit">Add Product</Button>
      </form>
      {addProduct && (
        <Alert severity="success">Product added successfully</Alert>
      )}
    </div>
  );
};

export default AddProduct;
