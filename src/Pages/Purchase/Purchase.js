import { useParams } from "react-router";
import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useFirebase from "./../../Hooks/useFirebase";
import "./Purchase.css";

import { Button } from "react-bootstrap";
import { Alert } from "@mui/material";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { purchaseId } = useParams();
  const [purchasetPro, setPurchasetPro] = useState({});
  const { user } = useFirebase();
  const [successfullyOrder, setSuccessfullyOrder] = useState(null);

  useEffect(() => {
    fetch(`https://radiant-brushlands-53565.herokuapp.com/products/${purchaseId}`)
      .then((res) => res.json())
      .then((result) => {
        setPurchasetPro(result);
      });
  }, []);

  //handel purches order
  const onSubmit = (data) => {
    data.email = user.email;
    data.name = user.displayName;
    data.status = purchasetPro.status;
    data.price = purchasetPro.price;
    data.productName = purchasetPro.name;
    fetch("https://radiant-brushlands-53565.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessfullyOrder(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="my-4">Purches product: {purchasetPro.name}</h2>
      {successfullyOrder && (
        <Alert severity="success">
          Your choosen product conferm oreder — <strong>check it out!</strong>
        </Alert>
      )}
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
          <img src={purchasetPro.img} />
          <p>{purchasetPro.des}</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
          <form className="shipping-form fs" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />
            <br />

            <input defaultValue={user.email} {...register("email")} />
            <br />

            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <br />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <br />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />
            <br />
            <Button type="submit">Conferm Order</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
