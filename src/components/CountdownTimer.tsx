import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex gap-4 justify-center items-center ${className}`}>
      <div className="text-center">
        <div className="countdown-digit animate-glow-pulse">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground mt-1 font-medium">DAYS</div>
      </div>
      <div className="text-primary text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="countdown-digit animate-glow-pulse">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground mt-1 font-medium">HOURS</div>
      </div>
      <div className="text-primary text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="countdown-digit animate-glow-pulse">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground mt-1 font-medium">MINS</div>
      </div>
      <div className="text-primary text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="countdown-digit animate-glow-pulse">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground mt-1 font-medium">SECS</div>
      </div>
    </div>
  );
};