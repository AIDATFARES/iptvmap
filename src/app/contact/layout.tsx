import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTVMap – Contact Support | Fast & Reliable Help",
  description: "Need help with your IPTV subscription? Contact the IPTVMap support team via email or WhatsApp. Fast response times and expert technical assistance. Reach out today!",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
