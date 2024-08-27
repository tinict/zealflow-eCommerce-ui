import React from "react";

import AuthLayout from "@/layouts/AuthLayout";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default LoginLayout;
