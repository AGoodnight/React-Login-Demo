import { observer } from "mobx-react-lite";
import { Route, RouteProps } from "react-router-dom";
import { AuthStore } from "./auth.store";

export type RouteResolver = () => { resolve: () => Promise<any> };

export type AuthRoutedProps = RouteProps & {};

const AuthRoute = observer((authState: AuthStore, { children, ...props }) => {
  if (authState.token) {
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
});

export default AuthRoute;
