// Import packages
import React from 'react';

interface InputBaseProps {
    label: string
    isError: boolean
    errorText: string
    setIsVisited: (value: boolean) => void;
};
// React.HtmlHTMLAttributes<HTMLInputElement>
// React.InputHTMLAttributes<HTMLInputElement>
// React.HTMLProps<HTMLInputElement>
// Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputBaseProps>
// Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputBaseProps>
type InputProps = InputBaseProps & React.InputHTMLAttributes<HTMLInputElement>

function Input({
  label,
  type,
  value,
  isError,
  errorText,
  onChange,
  required = false,
  setIsVisited
}: InputProps) {
  return (
    <>
      <label htmlFor="input" className="customLabel">
        <span className={`${isError ? 'isErrorText' : ''}`}>{label}</span>
        <input
          onBlur={() => setIsVisited(true)}
          className={`customInput ${isError ? 'isError' : ''}`}
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          required={required}
        />
      </label>

      {isError ? (
        <div>
          <p className="errorMessage">
            {/*<ErrorIcon style={{ fontSize: '18px', marginBottom: '-3px' }} />*/}
            <span style={{ marginLeft: '10px' }}>
              Error:
              {' '}
              {errorText}
            </span>
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Input;