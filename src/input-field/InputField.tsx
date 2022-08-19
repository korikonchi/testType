import React from "react";

import styles from "./InputField.module.scss";

interface Props {
  name: string;
  label: string;
  value: string;
  hideLabel: boolean;
  className: string;
  showError: boolean;
  errorMessage: string;
  type: string;
  max: number;
  onChange: Function;
  regExp: RegExp;
  placeholder: string;
}
type Ref = HTMLInputElement;
export const InputField = React.forwardRef<Ref, Props>(
  (
    {
      name = "",
      label = "",
      value = "",
      hideLabel = false,
      className = "",
      showError = false,
      errorMessage = "",
      type = "text",
      max = 100,
      onChange,
      regExp,
      placeholder = "",
      ...rest
    },
    ref
  ) => {
    const handleChange = (e) => {
      const { value } = e.target;
      if (value.length > max) return;
      if (regExp && !regExp.test(value)) return;

      onChange(e);
    };

    return (
      <div className={`${styles.input} ${className}`}>
        <label
          className={`${styles.label} ${hideLabel ? "hidden" : ""}`}
          htmlFor={`cubs-input-field-${name}`}
        >
          {label}
        </label>

        <input
          className={`${styles.field} ${showError ? styles.withError : ""}`}
          id={`cubs-input-field-${name}`}
          onChange={handleChange}
          value={value}
          name={name}
          type={type}
          ref={ref}
          placeholder={placeholder}
          {...rest}
        />
        <div aria-hidden={!showError} className={`${styles.errorLog} ellipsis`}>
          {showError && errorMessage && errorMessage}
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
