const Toast = ({ toasts }) => {
  if (!toasts.length) return null

  return (
    <div className="toast-wrap">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {toast.msg}
        </div>
      ))}
    </div>
  )
}

export default Toast