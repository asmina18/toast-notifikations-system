
import { useContext } from "react";
import { ToastContext } from "../components/ToastProvider";

export const useToast = () => {
  const { addToast } = useContext(ToastContext);
  return { addToast };
};
