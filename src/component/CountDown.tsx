"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("10/19/2026").getTime();
  const [difference, setDifference] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDifference(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-400">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default CountDown;
n