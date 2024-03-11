import React from "react";

export default function DIYSelectInput(
  { ...props }: React.SelectHTMLAttributes<HTMLSelectElement>,
  children: React.ReactNode
) {
  return <select {...props}>{children}</select>;
}
