import { TextField, Button } from "@mui/material";
import { useState } from "react";
import useFirebase from "./../../../Hooks/useFirebase";

const Review = () => {
  const [rating, setRating] = useState();
  const userRating = (e) => {
    setRating(e.target.value);
  };
  const { user } = useFirebase();
  const handelUserRating = (email) => {
    user.rating = { rating };
    fetch(`https://radiant-brushlands-53565.herokuapp.com/rating/${email}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user.rating),
    });
  };
  return (
    <div>
      <h2>Please give us your feedback</h2>

      <TextField
        type="number"
        onBlur={userRating}
        label="Standard"
        variant="standard"
      />
      <br />
      <Button
        onClick={() => handelUserRating(user.email)}
        type="submit"
        variant="contained"
        className="mt-2"
      >
        Add rating
      </Button>
    </div>
  );
};

export default Review;
