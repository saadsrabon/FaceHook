/* eslint-disable react/prop-types */
import React from "react";

const Field = ({ label, htmlFor, children, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      <label className="auth-label" htmlFor="email">
        Email
      </label>
      {children}
      {error && <div className="text-red-500">{error?.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);
  return child.props.id;
};

export default Field;
