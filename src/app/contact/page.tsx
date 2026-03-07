import type { Metadata } from "next";

import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Algarve SimRacing in Portimão for bookings, private events, coaching sessions, and simulator availability.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">Contact</h1>
      <p className="mt-4 max-w-3xl text-zinc-700 dark:text-zinc-300">
        Reach out for bookings, private events, and training sessions.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <form className="grid gap-4 rounded-2xl border border-zinc-200/70 bg-white/75 p-5 dark:border-white/10 dark:bg-white/5">
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input
              type="text"
              required
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input
              type="email"
              required
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Subject
            <input
              type="text"
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Message
            <textarea
              rows={6}
              className="rounded-lg border border-zinc-300/80 bg-white px-3 py-2 text-zinc-900 dark:border-white/20 dark:bg-black/40 dark:text-white"
            />
          </label>
          <button
            type="submit"
            className="w-fit rounded-full bg-[#FF3131] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cc0000]"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4 rounded-2xl border border-zinc-200/70 bg-white/75 p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-zinc-700 dark:text-zinc-200">{contactDetails.address}</p>
          <a href={contactDetails.phoneHref} className="block text-sm text-zinc-700 dark:text-zinc-200">
            {contactDetails.phone}
          </a>
          <a href={contactDetails.emailHref} className="block text-sm text-zinc-700 dark:text-zinc-200">
            {contactDetails.email}
          </a>
          <div className="flex gap-4 text-sm">
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF3131] hover:text-[#cc0000]"
            >
              Instagram
            </a>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF3131] hover:text-[#cc0000]"
            >
              WhatsApp
            </a>
          </div>
          <iframe
            title="Algarve SimRacing map"
            src="https://www.google.com/maps?q=Zona+Industrial+Coca+Maravilhas+Lote+15,+8500-483+Portimao,+Portugal&output=embed"
            className="h-72 w-full rounded-xl border border-zinc-200/70 dark:border-white/10"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
