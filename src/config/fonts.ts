import { Poppins, Montserrat_Alternates } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const titleFont = Montserrat_Alternates({ subsets: ["latin"], weight: ["500", "700"] });
