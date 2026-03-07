import type { Metadata } from "next";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Algarve SimRacing packages, coaching add-ons, and send your booking request for sessions, events, or private training.",
};

const packages = [
  {
    name: "Standard",
    price: "€99",
    details: "2 hours total · 1 x 2h session · up to 2 persons on 1 simulator",
    rate: "~€49.50/h",
  },
  {
    name: "Intermediate",
    price: "€160",
    details: "4 hours total · 2 x 2h sessions · up to 2 persons on 1 simulator",
    rate: "€40/h",
  },
  {
    name: "Pro",
    price: "€280",
    details: "8 hours total · 4 x 2h sessions · up to 2 persons on 1 simulator",
    rate: "€35/h",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">Pricing & Booking</h1>
      <p className="mt-4 max-w-3xl text-zinc-700 dark:text-zinc-300">
        Flexible plans for first-timers, regular drivers, and team events.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {packages.map((item) => (
          <Card key={item.name} className={item.name === "Intermediate" ? "border-[#FF3131]/40" : ""}>
            <CardHeader>
              <CardTitle className="font-heading text-[#FF3131]">{item.name}</CardTitle>
              <CardDescription>{item.details}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-heading text-5xl font-bold">{item.price}</p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-300">Effective rate: {item.rate}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <MagicCard className="mt-6">
        <h2 className="font-heading text-3xl font-semibold text-[#FF3131]">Coaching & Pro Add-ons</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
          <li>AI Coaching with real-time lap guidance: €15/hour</li>
          <li>Professional telemetry support for driver and engineer analysis</li>
          <li>Human coaching available on request</li>
        </ul>
      </MagicCard>

      <section id="booking" className="mt-12">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Booking Request</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Send your preferred package and schedule. We will confirm availability quickly.
        </p>
        <form className="mt-6 grid gap-4 rounded-2xl border border-zinc-200/70 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input
              type="text"
              name="name"
              required
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Phone
            <input
              type="tel"
              name="phone"
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Package
            <select
              name="package"
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
              defaultValue="Standard"
            >
              <option>Standard</option>
              <option>Intermediate</option>
              <option>Pro</option>
              <option>Custom Event</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm md:col-span-2">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Preferred date/time, number of drivers, special requests."
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-[#FF3131] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cc0000]"
            >
              Send Booking Request
            </button>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              For immediate bookings call {contactDetails.phone} or use WhatsApp.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
