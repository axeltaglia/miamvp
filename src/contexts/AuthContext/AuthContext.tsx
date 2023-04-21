import { createContext, ReactElement, useContext, useReducer } from "react";
import { useGlobal } from "../GlobalContext/GlobalContext";
import { ChildrenType } from "../types";
import {reducer} from "./reducer";
import {
  AuthType,
} from "./types";
import {AuthApi, SignInRequest} from "../../api/authApi";
import {setAuthToken} from "./actions";

const initState: AuthType = {
  authToken: window.localStorage.getItem("miaAuthToken") || "",
};

const useAuthContext = (initState: AuthType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { alertSuccessMsg } = useGlobal();

  const signIn = async (username: string, password: string): Promise<void> => {
    const payload: SignInRequest = {
      username,
      password,
    };
    try {
      const {data} = await AuthApi.signIn(payload)
      dispatch(setAuthToken(data.authToken))
      window.localStorage.setItem("miaAuthToken", data.authToken);
      alertSuccessMsg("User has signed in");
    } catch(e) {
      dispatch(setAuthToken(''))
      window.localStorage.removeItem("miaAuthToken");
      throw e;
    }
  };

  const signOut = () => {
    dispatch(setAuthToken(''))
    window.localStorage.removeItem("miaAuthToken");
  };

  return { state, signIn, signOut };
};

const AuthContext = createContext({} as ReturnType<typeof useAuthContext>);

export default function AuthProvider({ children }: ChildrenType): ReactElement {
  return (
      <AuthContext.Provider value={useAuthContext(initState)}>
        {children}
      </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const {
    state: { authToken },
    signIn,
    signOut,
  } = useContext(AuthContext);
  return { authToken, signIn, signOut };
};
