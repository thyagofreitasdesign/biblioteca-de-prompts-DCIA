export const metadata = {
  title: 'DCIA Prompt Vault',
  description: 'Biblioteca de prompts do método DCIA'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
