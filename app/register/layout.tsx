import React from "react";

import AuthLayout from "@/layouts/AuthLayout";

function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default RegisterLayout;
