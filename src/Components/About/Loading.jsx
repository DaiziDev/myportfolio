import { useEffect, useState } from "react";

function WaterFillCircle({ percentage, number }) {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    if (fillPercent < percentage) {
      const timer = setTimeout(() => {
        setFillPercent((prev) => Math.min(prev + 1, percentage));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [fillPercent, percentage]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (fillPercent / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center bg-red-200">
      <svg width="60" height="60" viewBox="0 0 120 120" className="absolute">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ccc"
          strokeWidth="10"
          fill="rgba(194, 122, 255, 0.5)"
        />
        {/* Water fill circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(194, 122, 255, 1)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute text-xl font-bold text-white">{number}%</div>
    </div>
  );
}

export default WaterFillCircle;