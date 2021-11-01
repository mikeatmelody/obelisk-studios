import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <main className="container">
        <title>Success</title>
        <h1>Success!</h1>
        <p>
          Thank you for your submission.{" "}
          <span role="img" aria-label="Face With Sunglasses emoji ">
            😎
          </span>{" "}
          We will get back to you shortly.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
