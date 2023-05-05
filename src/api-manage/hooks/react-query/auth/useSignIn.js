import { useMutation } from "react-query";
import { signIn_api } from "../../../ApiRoutes";
import MainApi from "../../../MainApi";

const userSignIn = async (signInData) => {
  const { data } = await MainApi.post(`${signIn_api}`, signInData);
  return data;
};
export const useSignIn = () => {
  return useMutation("sign-In", userSignIn);
};
