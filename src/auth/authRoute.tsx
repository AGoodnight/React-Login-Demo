import { Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "./auth.context";

export type RouteResolver = () => { resolve: () => Promise<any> };

export type AuthRoutedProps = RouteProps & {};

const AuthRoute = ({ children, ...props }: AuthRoutedProps) => {
  const { state: authState } = useAuthContext();
  if (authState.key && authState.signature) {
    return children ? (
      <Route {...props}>{children}</Route>
    ) : (
      <Route {...props} />
    );
  } else {
    if (props.render) {
      delete props.render;
    }
    return <Route {...props}> Unauthorized </Route>;
  }
};

export default AuthRoute;
