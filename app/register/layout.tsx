import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default RegisterLayout;
