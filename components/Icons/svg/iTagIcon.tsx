// Types
import type { IconProps } from "../icons.types";

export default function Icon({ _onClick, className }: IconProps) {
  return (
    <svg
      width="6"
      height="6"
      className={className}
      onClick={_onClick}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3ZM1.87505 3C1.87505 3.62129 2.37871 4.12495 3 4.12495C3.62129 4.12495 4.12495 3.62129 4.12495 3C4.12495 2.37871 3.62129 1.87505 3 1.87505C2.37871 1.87505 1.87505 2.37871 1.87505 3Z"
        fill="#43F7D5"
      />
    </svg>
  );
}
