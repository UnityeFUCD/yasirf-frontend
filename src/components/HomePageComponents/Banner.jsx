import { Link } from "react-router";

import { Line2 } from "@/assets";
import { cn } from "@/lib/utils";

import { StarIcon, StarIcon2 } from "../Icons/HomeIcon";
import PickGame from "./PickGame";
import {
  BoostIcon,
  CashbackIcon,
  DollarIcon,
  LockIcon,
  OptionsIcon,
  PaymentIcon,
  SafeIcon,
  SupportIcon,
} from "./cart/Icons";
import { Button } from "../ui/button";

const HERO_BADGES = [
  { label: "SSL SECURE", icon: <LockIcon />, tone: "primary" },
  { label: "VPN, SAFE BOOST", icon: <BoostIcon />, tone: "lime" },
  { label: "SECURE PAYMENTS", icon: <PaymentIcon />, tone: "neutral" },
  { label: "MONEY REFUNDS", icon: <DollarIcon />, tone: "lime-border" },
  { label: "24/7 SUPPORT", icon: <SupportIcon />, tone: "slate" },
  { label: "CASHBACK", icon: <CashbackIcon />, tone: "frost" },
  { label: "MULTIPLE PAYMENT OPTIONS", icon: <OptionsIcon />, tone: "frost" },
  { label: "SAFE SERVICE", icon: <SafeIcon />, tone: "slate" },
];

const badgeToneStyles = {
  primary:
    "border border-primaryColor/50 bg-primaryColor/15 text-primaryColor shadow-[0_0_30px_rgba(195,255,0,0.08)]",
  lime: "border border-primaryColor/60 bg-primaryColor/20 text-primaryColor",
  "lime-border":
    "border border-primaryColor bg-transparent text-primaryColor backdrop-blur-[6px]",
  neutral: "border border-white/20 bg-white/10 text-white",
  frost:
    "border border-white/15 bg-white/12 text-white backdrop-blur-[6px] text-white/90",
  slate: "border border-slate-700 bg-black/60 text-primaryColor",
};

const Banner = () => {
  const [heroLeadBadge, ...supportBadges] = HERO_BADGES;

  return (
    <section className="relative overflow-hidden bg-background text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-16 h-[420px] w-[420px] rounded-full bg-primaryColor/40 blur-[200px]" />
        <div className="absolute right-[-20%] top-40 h-[520px] w-[520px] rounded-full bg-[#4EEB3D]/30 blur-[260px]" />
        <div className="absolute inset-x-0 bottom-[20%] h-[320px] bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col px-4 pb-20 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-[52px] lg:pb-32 lg:pt-[220px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-[10px] text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur-[6px]">
                <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-primaryColor" aria-hidden="true" />
                elite boosting network
              </div>

              <h1 className="font-nav-rajdhani text-[48px] uppercase leading-[0.92] sm:text-[64px] md:text-[76px] lg:text-[88px]">
                Start <span className="text-primaryColor">dominating</span> destiny 2
              </h1>

              <p className="max-w-[560px] font-manrope text-base text-white/70 sm:text-lg">
                Transform end-game grinds into quick wins. Queue into Trials and raids with our vetted fireteam of pros, tracked live from purchase to completion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="h-[52px] rounded-full px-8 text-base font-semibold uppercase tracking-[0.24em] text-ink">
                get started
              </Button>
              <Button
                variant="outline"
                className="h-[52px] rounded-full border-white/30 bg-transparent px-8 text-base font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/10"
              >
                browse catalog
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className={cn(
                  "flex items-center gap-3 rounded-[12px] px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em]",
                  badgeToneStyles[heroLeadBadge.tone]
                )}
              >
                <span className="pt-[2px]" aria-hidden="true">
                  {heroLeadBadge.icon}
                </span>
                {heroLeadBadge.label}
              </div>
              <div className="flex flex-wrap gap-3 rounded-[12px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-[6px]">
                {supportBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={cn(
                      "flex flex-1 min-w-[140px] items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em]",
                      badgeToneStyles[badge.tone]
                    )}
                  >
                    <span className="pt-[1px]" aria-hidden="true">
                      {badge.icon}
                    </span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[6px] sm:flex-row sm:items-center sm:gap-6">
              <div>
                <p className="font-nav-rajdhani text-4xl font-semibold uppercase tracking-[0.22em] text-primaryColor">
                  240+
                </p>
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/70">
                  reviews on <StarIcon /> Trustpilot
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" aria-hidden="true" />
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-[6px] text-primaryColor">
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                  <StarIcon2 />
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/70">
                  <span>excellent</span>
                  <Link to="/see-all" className="text-[#00B67A] hover:underline">
                    see all
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] items-end justify-center lg:flex">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <img src={Line2} alt="" className="w-[160px]" />
            </div>
            <div className="relative flex w-full max-w-[360px] flex-col gap-6 rounded-[28px] border border-white/10 bg-white/5 p-6 text-white backdrop-blur-[12px]">
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">live fireteam status</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-[16px] border border-white/15 bg-background/80 px-4 py-3">
                  <span className="text-sm uppercase tracking-[0.2em]">trials run</span>
                  <span className="font-nav-rajdhani text-2xl font-semibold text-primaryColor">4.8x</span>
                </div>
                <div className="grid gap-3 rounded-[16px] border border-primaryColor/40 bg-primaryColor/10 px-4 py-4 text-xs uppercase tracking-[0.2em] text-primaryColor">
                  <p>nightfall completion</p>
                  <p className="text-2xl font-semibold text-white">96%</p>
                  <p className="text-white/70">avg. same-day delivery across all services</p>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-black/60 px-4 py-4 text-xs uppercase tracking-[0.18em] text-white/60">
                  <p>voice, vpn and verification protocols active on every order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden lg:block">
          <PickGame />
        </div>

      </div>
    </section>
  );
};

export default Banner;
