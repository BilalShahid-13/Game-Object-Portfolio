import { clsx, type ClassValue } from "clsx"
import { Montserrat } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element && (window as any).lenis) {
    (window as any).lenis.scrollTo(element, { offset: -80, duration: 1.5 });
  } else {
    element?.scrollIntoView({ behavior: "smooth" });
  }
};