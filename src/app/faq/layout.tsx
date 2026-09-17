import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTVMap – Frequently Asked Questions | IPTV Setup & Billing",
  description: "Have questions about our premium IPTV service? Find fast answers about setup, channels, payments, and troubleshooting in the comprehensive IPTVMap FAQ.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
