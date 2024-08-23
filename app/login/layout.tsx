import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default LoginLayout;
