/* eslint-disable @next/next/no-page-custom-font */
import "@/app/globals.css";

export const metadata = {
  title: "Snitap Patins",
  description: "Landing page oficial da Snitap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&family=Syne:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`min-h-screen `}>{children}</body>
    </html>
  );
}
