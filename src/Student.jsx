import PropTypes from "prop-types";

export default function Students({ name, age, isStudent }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is student?: {isStudent ? "Yes" : "No"}</p>
      <br />
    </>
  );
}

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Students.defaultProps = {
  name: "Guest",
  age: 100,
  isStudent: false,
};
