import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import { bp } from "@/lib/utils";

const services = [
  "Professional simulator rentals with elite hardware",
  "Streaming and podcast integration on flagship rig",
  "Group bookings, birthdays, and private team events",
  "iRacing and Assetto Corsa sessions with your own account",
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Algarve SimRacing in Portimão offers premium simulator experiences, private events, and advanced driver prep near Autódromo Internacional do Algarve.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,49,49,0.15),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(255,138,0,0.12),transparent_45%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Portimão, Portugal
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[0.95] text-[#FF3131] sm:text-6xl md:text-7xl">
              Portugal&apos;s Premier Sim Racing Experience
            </h1>
            <p className="mt-6 max-w-xl text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
              Where Virtual Meets Reality. Built by racers for racers, with world-class rigs,
              coaching options, and authentic motorsport immersion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/pricing#booking">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/simulators">Explore Simulators</Link>
              </Button>
            </div>
          </div>

          <div className="relative z-10">
            <MagicCard className="p-2">
              <Image
                src={bp("/assets/008-900x900-1.jpg")}
                alt="Algarve SimRacing hero action shot"
                width={900}
                height={900}
                priority
                className="h-auto w-full rounded-xl object-cover"
              />
            </MagicCard>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-4xl font-bold sm:text-5xl">Services</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <MagicCard key={service}>
              <p className="text-zinc-700 dark:text-zinc-200">{service}</p>
            </MagicCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-12">
        <h2 className="font-heading text-4xl font-bold sm:text-5xl">At A Glance</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MagicCard>
            <p className="font-heading text-4xl font-bold text-[#FF3131]">2</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Professional simulators</p>
          </MagicCard>
          <MagicCard>
            <p className="font-heading text-4xl font-bold text-[#FF3131]">RTX 5090</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Flagship graphics power</p>
          </MagicCard>
          <MagicCard>
            <p className="font-heading text-4xl font-bold text-[#FF3131]">From €35/h</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Best package effective rate</p>
          </MagicCard>
          <MagicCard>
            <p className="font-heading text-4xl font-bold text-[#FF3131]">5 min</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              From Autódromo Internacional do Algarve
            </p>
          </MagicCard>
        </div>
      </section>
    </div>
  );
}
