import Container from "components/Container";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "routes";
import { StyledError, Text, Title } from "./ErrorComponent.styled";

const ErrorComponent = ({
  title = "Something went wrong!!!",
  children,
  timeout,
  redirectTo = ROUTES.MAIN,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, timeout);
    }
  }, [navigate, timeout, redirectTo]);

  return (
    <Container>
      <StyledError>
        {title && <Title>{title}</Title>}

        {timeout && (
          <Text>
            You will be redirected to the main page in {timeout / 1000} seconds.
          </Text>
        )}
      </StyledError>

      {children && children}
    </Container>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  timeout: PropTypes.number,
  redirectTo: PropTypes.string,
};
