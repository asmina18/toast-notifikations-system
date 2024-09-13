import style from "../styles/ToastStyle.module.scss";  

export function NotificationItem({ toast }) {
  return (
    <div
      className={`${style.toast} ${style[toast.type]} ${style[toast.position]}`}  
    >
      {toast.message}  
    </div>
  );
}

