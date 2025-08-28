//@@viewOn:imports
import React from "react";
import { buttonProps } from "./utils/prop-types";
//@@viewOff:imports

//@@viewOn:helpers
const spinStyle = {
  display: "inline-block",
  animation: "spin 1s linear infinite",
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
//@@viewOff:helpers

//@@viewOn:render
function Button({
  size = "medium",
  borderRadius = "medium",
  icon,
  iconRight,
  animeIcon,
  animeIconRight,
  onClick,
  width,
  label,
  tooltip,
  pressed,
  disabled,
  hidden,
  style: customStyle,
}) {
  if (hidden) return null;

  const style = {
    padding: size === "small" ? "8px 12px" : size === "large" ? "12px 20px" : "10px 16px",
    borderRadius:
      borderRadius === "none"
        ? "0px"
        : borderRadius === "small"
          ? "4px"
          : borderRadius === "large"
            ? "16px"
            : "8px",
    width: width || "auto",
    opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "auto",
    ...customStyle,
  };

  return (
    <>
      {/* add keyframes only once */}
      <style>{keyframes}</style>
      <button style={style} onClick={onClick} disabled={disabled} title={tooltip}>
        {/* left icons */}
        {icon && <span style={{ marginRight: label ? "6px" : 0 }}>{icon}</span>}
        {animeIcon && (
          <span style={{ ...spinStyle, marginRight: label ? "6px" : 0 }}>{animeIcon}</span>
        )}

        {/* label */}
        {label}

        {/* right icons */}
        {iconRight && <span style={{ marginLeft: label ? "6px" : 0 }}>{iconRight}</span>}
        {animeIconRight && (
          <span style={{ ...spinStyle, marginLeft: label ? "6px" : 0 }}>{animeIconRight}</span>
        )}
      </button>
    </>
  );
}

//@@viewOff:render

//@@viewOn:exports
Button.propTypes = {
  ...buttonProps,
};
export default Button;
//@@viewOff:exports
