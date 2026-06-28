import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import './global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
