
"use client"

import { useEffect, useState } from 'react';
import { Zap, Trophy, UserCheck, Star } from 'lucide-react';

export function LivePulse() {
  const [pulse, setPulse] = useState(0);

  const updates = [
    { text: "Scholar #4829 just mastered 'Calculus Basics'", icon: Zap },
    { text: "Lead #2091 enrolled for 'NDA Foundation' batch", icon: UserCheck },
    { text: "New Mock Result: Ishita Negi scored 98/100 in Physics", icon: Trophy },
    { text: "Mentor Maj. Singh assigned to 4 new scholars in Jakhan", icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-accent py-3 px-4 overflow-hidden relative border-y border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-left-4 duration-500" key={pulse}>
          <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
            {(() => {
              const Icon = updates[pulse].icon;
              return <Icon className="h-4 w-4" />;
            })()}
          </div>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">
            LIVE SUCCESS PULSE: <span className="opacity-80 ml-2 font-bold">{updates[pulse].text}</span>
          </p>
          <div className="flex items-center gap-1 ml-4 hidden md:flex">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[8px] font-black text-primary/60">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
