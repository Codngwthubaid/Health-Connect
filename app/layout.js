import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HealthConnect",
  description: "Our AI-powered mobile health platform is designed to help healthcare providers like Ravi efficiently manage patient care across multiple locations. By streamlining the tracking of chronic conditions, our solution allows for easy input and retrieval of vital patient data. With features such as remote monitoring, healthcare providers can keep a close eye on patients' health, regardless of their location.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: false,
      },
    }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
