function Button({ id, title, className, onClick }) {
  return (
    <button id={id} className={className} title={title} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
