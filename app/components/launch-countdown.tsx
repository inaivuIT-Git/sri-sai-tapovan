"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./launch-countdown.css";

const LAUNCH_AT = new Date("2026-10-20T13:30:00+05:30").getTime();

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const difference = LAUNCH_AT - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    hours: Math.floor(difference / 3_600_000),
    minutes: Math.floor((difference % 3_600_000) / 60_000),
    seconds: Math.floor((difference % 60_000) / 1_000),
  };
}

function twoDigits(value: number) {
  return value.toString().padStart(2, "0");
}

export default function LaunchCountdown({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined,
  );

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getTimeLeft());

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1_000);

    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft === null) {
    return children;
  }

  return (
    <main className="launch-countdown-page">
      <div className="launch-countdown-glow launch-countdown-glow-left" />
      <div className="launch-countdown-glow launch-countdown-glow-right" />

      <section className="launch-countdown-card" aria-labelledby="launch-title">
        <div className="launch-logo-wrap">
          <Image
            src="/images/logo/paduka-logo.png"
            alt="சாய் சத்சங் @ குருபாதம்"
            width={132}
            height={132}
            priority
          />
        </div>

        <p className="launch-kicker">ஓம் சாய் ராம்</p>
        <h1 id="launch-title">சாய் சத்சங் @ குருபாதம்</h1>
        <p className="launch-message">
          சாயியின் அருளில் நமது ஆன்மிக இணையதளம் இன்று மதியம் 1:30 மணிக்கு
          மலர்கிறது.
        </p>

        <div
          className="launch-timer"
          role="timer"
          aria-live="polite"
          aria-label={
            timeLeft
              ? `${timeLeft.hours} மணி ${timeLeft.minutes} நிமிடம் ${timeLeft.seconds} விநாடி மீதமுள்ளது`
              : "தொடங்குகிறது"
          }
        >
          <div className="launch-time-unit">
            <strong>{twoDigits(timeLeft?.hours ?? 0)}</strong>
            <span>மணி</span>
          </div>
          <span className="launch-time-separator" aria-hidden="true">
            :
          </span>
          <div className="launch-time-unit">
            <strong>{twoDigits(timeLeft?.minutes ?? 0)}</strong>
            <span>நிமிடம்</span>
          </div>
          <span className="launch-time-separator" aria-hidden="true">
            :
          </span>
          <div className="launch-time-unit">
            <strong>{twoDigits(timeLeft?.seconds ?? 0)}</strong>
            <span>விநாடி</span>
          </div>
        </div>

        <div className="launch-divider" />
        <p className="launch-blessing">நம்பிக்கை · பொறுமை · அன்பு · சேவை</p>
        <p className="launch-date">20 அக்டோபர் 2026 · மதியம் 1:30 · IST</p>
      </section>
    </main>
  );
}
