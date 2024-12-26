import PropTypes from "prop-types";

export default function UserGreeting({ name, isLoggedIn }) {
  const WelcomeMessage = <h2>Welcome {name}</h2>;
  const LoginPrompt = <h2>Please Login To Continue</h2>;
  return <>{isLoggedIn ? WelcomeMessage : LoginPrompt}</>;
}
UserGreeting.propTypes = {
  name: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
UserGreeting.defaultProps = {
  name: "Guest",
  isLoggedIn: false,
};
