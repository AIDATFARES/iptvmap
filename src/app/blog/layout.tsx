import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTVMap Blog – IPTV News, Guides & Streaming Tips",
  description: "Stay updated with the latest in 4K streaming technology, new channel additions, setup guides and troubleshooting tips to optimize your IPTVMap experience.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
