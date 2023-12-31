import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Storm',
	description: 'simple store backend',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={nunitoSans.className}>{children}</body>
		</html>
	);
}
