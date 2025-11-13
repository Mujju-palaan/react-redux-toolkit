// app/Providers.tsx
"use client"; // 👈 Important — because Redux uses hooks (client-side only)

import { Provider } from "react-redux";
import store  from "@/app/redux-toolkit/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
