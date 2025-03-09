// import Script from "next/script";
import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Himanshu Kashyap",
  description:
    "Hey, I'm Himanshu Kashyap a Software Developer from Dehradun, Uttarakhand. Here's my portfolio where you can see all my projects, blogs, and achievements.",
  authors: [{ name: "Himanshu Kashyap", url: "https://www.himankash.com/" }],
  creator: "Himanshu Kashyap",
  publisher: "Himanshu Kashyap",
  keywords: [
    "himan_kash",
    "himanshu",
    "kashyap",
    "himanshu kashyap",
    "Himanshu Kashyap",
    "iamhiman",
    "lpu",
    "dehradun",
    "software developer",
    "web developer",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
//       />
//       <Script id="google-analytics-script" strategy="afterInteractive">
//         {`window.dataLayer = window.dataLayer || [];
//            function gtag(){dataLayer.push(arguments);}
//            gtag('js', new Date());
//            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
//       </Script>
//       <Component {...pageProps} />
//     </>
//   );
// };

// export default MyApp;
