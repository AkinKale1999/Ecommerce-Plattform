import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

// Diese Funktion nimmt beliebige Daten (value: T), wandelt sie in 
// JSON-Objekt um (JSON.stringify(value))und dann wieder in ein normales 
// JavaScript-Objekt (JSON.parse(...)).

export function formatNumberWithDecimal(num: number): string {

  const [int, decimal] = num.toString().split('.');

  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`

}