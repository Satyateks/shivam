import React from 'react'

const CInput = ({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    column = 1,
    required = false,
    className = "",
    ...props
}) => {
    const gridClasses = `row row-cols-${column} g-3`;

  return (
    <div className={`${gridClasses} ${className}`}>
    <div className="col">
      {label && (
        <label className="d-block fw-bold">
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        required={required}
        {...props}
      />
    </div>
  </div>
  )
}

export default CInput