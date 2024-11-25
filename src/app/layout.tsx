import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./componentes/navbar/Navbar";
import { poppins } from "@/config/fonts";

export const metadata: Metadata = {
	title: "Iñaki Telayna",
	description: "Este es el portfolio de Iñaki Telayna.",
};

export default function RootLayout({
	children, // Solo usamos `children` por defecto en Next.js.
}: {
	children: React.ReactNode; // Definimos `children` como ReactNode.
}) {
	return (
		<html lang='es'>
			<body className={` ${poppins.className} antialiased`}>
				<Navbar />
				<div className='mt-32'>{children}</div>
			</body>
		</html>
	);
}
