import React, { useState } from "react";
import { motion } from "framer-motion";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: string;
  clearable?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantClasses = {
  filled:
    "bg-blue-50 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:focus:ring-blue-400",
  outlined:
    "bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-400",
  ghost:
    "bg-transparent border-b border-gray-300 focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:focus:border-blue-400",
};


export default function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = true, // ✅ default is true now
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-2 w-full"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`w-full rounded-lg shadow-sm transition-all duration-300 focus:outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${
            invalid ? "border-red-500 focus:ring-red-200" : ""
          } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Password Toggle */}
        {type === "password" && !loading && (
          <motion.button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            whileTap={{ scale: 0.9 }}
          >
            {showPassword ? "Hide" : "Show"}
          </motion.button>
        )}

        {/* Clear Button */}
        {clearable && value && !disabled && !loading && (
          <motion.button
            onClick={handleClear}
            type="button"
            aria-label="Clear input"
            className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        )}
      </div>

      {invalid && errorMessage ? (
        <motion.span
          className="text-red-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {errorMessage}
        </motion.span>
      ) : (
        helperText && (
          <span className="text-gray-500 text-xs dark:text-gray-400">
            {helperText}
          </span>
        )
      )}
    </motion.div>
  );
}
