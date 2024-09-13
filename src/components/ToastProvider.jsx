
import { createContext, useState } from "react";
import { ToastList } from "./ToastList";

export const ToastContext = createContext(); 

export function ToastProvider({ children }) { 
  const [toasts, setToasts] = useState([]); 

  function addToast(message, type = "success", position = "top-right") {
    const id = Date.now(); 
    setToasts((prev) => [...prev, { id, message, type, position }]); 

    setTimeout(() => removeToast(id), 3000);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id)); 
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastList toasts={toasts} />
    </ToastContext.Provider>
  );
}
