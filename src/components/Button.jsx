import './Button.css';

function Button({ children, variant = 'primary', href, onClick, type = 'button', disabled = false }) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;