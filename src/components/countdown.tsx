import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2025-12-27T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
      {[
        { label: "Jours", value: timeLeft.days },
        { label: "Heures", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Secondes", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${i * 100}ms` }}>
          <span className="text-3xl md:text-5xl font-serif font-bold text-secondary tabular-nums">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-white/70 uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}