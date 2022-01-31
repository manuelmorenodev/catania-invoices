import { LoginRoot } from "./LoginRoot";
import { LoginContextProvider } from "./LoginContext";

export { useLogin } from "./use-login";

export const login = ({ registerAction }) => {
  registerAction({
    priority: -1,
    hook: "$REACT_ROOT_COMPONENT",
    handler: (App) => ({ component: () => <LoginRoot rootComponent={App} /> })
  });

  registerAction({
    hook: "$REACT_ROOT_WRAPPER",
    handler: { component: LoginContextProvider }
  });
};
