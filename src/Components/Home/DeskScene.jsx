import { motion } from "motion/react";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function DeskScene() {
  const { isDark, toggleDark } = useTheme();

  // Palette
  const bg = isDark ? "#1a1a2e" : "#f8f6f2";
  const floor = isDark ? "#12121f" : "#ece6dc";
  const deskTop = isDark ? "#b89b78" : "#d4b896";
  const deskFront = isDark ? "#a88966" : "#c4a882";
  const deskShadow = isDark ? "#8a7354" : "#b09876";
  const laptopBody = "#2d2d2d";
  const screenGlow = isDark ? "#6ab0ff" : "#4a90d9";
  const plantPot = "#d4845a";
  const plantPotRim = "#c4734a";
  const leaf1 = "#4a7c59";
  const leaf2 = "#68a678";
  const leaf3 = "#5a9676";
  const cupBody = isDark ? "#d4c5b8" : "#f0e6d8";
  const coffee = "#5c3a21";
  const steamColor = isDark ? "rgba(200,200,200,0.3)" : "rgba(150,150,150,0.2)";
  const lampBase = isDark ? "#777" : "#555";
  const lampArm = isDark ? "#888" : "#666";
  const lampShade = isDark ? "#d49040" : "#e8a040";
  const bulbOn = "#fff8e0";
  const bulbOff = "#ffe066";
  const globeBlue = "#4a90d9";
  const globeGreen = "#68a678";
  const bookColors = ["#e74c3c", "#3498db", "#2ecc71"];

  return (
    <div className="relative w-full max-w-xl mx-auto select-none" data-aos="fade-up" data-aos-duration="1500">
      <motion.svg
        viewBox="0 0 600 480"
        className="w-full h-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Definitions */}
        <defs>
          {/* Lamp glow gradient */}
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe066" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#ffe066" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffe066" stopOpacity="0" />
          </radialGradient>

          {/* Screen glow */}
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={screenGlow} stopOpacity="0.8" />
            <stop offset="100%" stopColor={screenGlow} stopOpacity="0.3" />
          </linearGradient>

          {/* Wall texture */}
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={bg} />
            <stop offset="100%" stopColor={bg} stopOpacity="0.8" />
          </linearGradient>

          {/* Soft shadow filter */}
          <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
          </filter>

          {/* Glass reflection for photo frame */}
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#fff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background wall */}
        <rect x="0" y="0" width="600" height="340" fill={bg} rx="0" />

        {/* Floor */}
        <rect x="0" y="340" width="600" height="140" fill={floor} />

        {/* Floor line */}
        <line x1="0" y1="340" x2="600" y2="340" stroke={isDark ? "#2a2a3e" : "#ddd" } strokeWidth="1" />

        {/* === DESK === */}
        {/* Desk top surface */}
        <rect
          x="40" y="290" width="520" height="22" rx="4"
          fill={deskTop}
          filter="url(#softShadow)"
        />
        {/* Desk top highlight */}
        <rect
          x="40" y="290" width="520" height="3" rx="1"
          fill={isDark ? "#c8ad8a" : "#e0c8a8"}
          opacity="0.6"
        />
        {/* Desk front panel */}
        <rect x="35" y="312" width="530" height="18" rx="3" fill={deskFront} />
        {/* Desk front shadow */}
        <rect x="35" y="328" width="530" height="4" rx="2" fill={deskShadow} />

        {/* Desk legs */}
        <rect x="55" y="330" width="10" height="50" rx="2" fill="#8a7a6a" />
        <rect x="535" y="330" width="10" height="50" rx="2" fill="#8a7a6a" />

        {/* === LAPTOP === */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Screen back */}
          <rect x="235" y="175" width="130" height="100" rx="8" fill={laptopBody} filter="url(#softShadow)" />
          {/* Screen bezel */}
          <rect x="240" y="180" width="120" height="85" rx="4" fill="#1a1a1a" />
          {/* Screen content */}
          <rect x="244" y="184" width="112" height="75" rx="3" fill="url(#screenGrad)" />
          {/* Code lines on screen */}
          <line x1="250" y1="196" x2="290" y2="196" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="206" x2="310" y2="206" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="216" x2="275" y2="216" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="226" x2="330" y2="226" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="236" x2="295" y2="236" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="246" x2="315" y2="246" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
          {/* Camera dot */}
          <circle cx="300" cy="178" r="1.5" fill="#333" />
          {/* Keyboard base */}
          <rect x="235" y="275" width="130" height="12" rx="3" fill="#3a3a3a" />
          {/* Keyboard keys */}
          {[...Array(8)].map((_, i) => (
            <rect key={i} x={240 + i * 15} y="277" width="12" height="4" rx="1" fill="#555" />
          ))}
          {/* Trackpad */}
          <rect x="280" y="282" width="40" height="3" rx="1" fill="#555" />
        </motion.g>

        {/* === COFFEE CUP === */}
        <motion.g
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Cup shadow */}
          <ellipse cx="410" cy="288" rx="18" ry="4" fill="#000" opacity="0.08" />
          {/* Cup body */}
          <path d="M392 260 L395 285 H425 L428 260 Z" fill={cupBody} />
          {/* Cup rim */}
          <ellipse cx="410" cy="260" rx="19" ry="5" fill={cupBody} />
          {/* Coffee liquid */}
          <ellipse cx="410" cy="262" rx="16" ry="3.5" fill={coffee} />
          {/* Handle */}
          <path d="M428 268 Q445 268 444 278 Q443 285 425 282" fill="none" stroke={cupBody} strokeWidth="3" strokeLinecap="round" />

          {/* Steam animation */}
          <motion.g
            animate={{ y: [-8, -18, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M402 252 Q406 244 402 236" fill="none" stroke={steamColor} strokeWidth="2" strokeLinecap="round" />
          </motion.g>
          <motion.g
            animate={{ y: [-6, -16, -6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <path d="M410 250 Q414 242 410 234" fill="none" stroke={steamColor} strokeWidth="2" strokeLinecap="round" />
          </motion.g>
          <motion.g
            animate={{ y: [-7, -17, -7] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <path d="M418 252 Q422 244 418 236" fill="none" stroke={steamColor} strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </motion.g>

        {/* === PLANT === */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Pot shadow */}
          <ellipse cx="110" cy="288" rx="22" ry="4" fill="#000" opacity="0.08" />
          {/* Pot */}
          <path d="M92 285 L96 310 H124 L128 285 Z" fill={plantPot} />
          {/* Pot rim */}
          <rect x="88" y="280" width="44" height="7" rx="3" fill={plantPotRim} />
          {/* Soil */}
          <ellipse cx="110" cy="283" rx="18" ry="3" fill="#4a3520" />
          {/* Stem */}
          <line x1="110" y1="280" x2="110" y2="235" stroke={leaf1} strokeWidth="3" strokeLinecap="round" />
          {/* Leaves */}
          <motion.ellipse
            cx="110" cy="235" rx="22" ry="10"
            fill={leaf2}
            transform="rotate(-15 110 235)"
            animate={{ rotate: [-15, -12, -15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="100" cy="250" rx="16" ry="8"
            fill={leaf1}
            transform="rotate(20 100 250)"
            animate={{ rotate: [20, 23, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="122" cy="248" rx="14" ry="7"
            fill={leaf3}
            transform="rotate(-30 122 248)"
            animate={{ rotate: [-30, -27, -30] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="108" cy="262" rx="18" ry="8"
            fill={leaf2}
            transform="rotate(5 108 262)"
            animate={{ rotate: [5, 8, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* === BOOKS === */}
        <motion.g
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Book 1 */}
          <rect x="150" y="275" width="12" height="38" rx="2" fill={bookColors[0]} filter="url(#softShadow)" />
          {/* Book 2 */}
          <rect x="163" y="272" width="10" height="41" rx="2" fill={bookColors[1]} filter="url(#softShadow)" />
          {/* Book 3 */}
          <rect x="174" y="278" width="14" height="35" rx="2" fill={bookColors[2]} filter="url(#softShadow)" />
          {/* Book details */}
          <line x1="153" y1="290" x2="161" y2="290" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="166" y1="288" x2="172" y2="288" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="177" y1="292" x2="187" y2="292" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
        </motion.g>

        {/* === GLOBE === */}
        <motion.g
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Globe base */}
          <rect x="445" y="280" width="30" height="5" rx="2" fill="#888" />
          <rect x="453" y="285" width="14" height="8" rx="1" fill="#777" />
          {/* Globe stand */}
          <line x1="460" y1="254" x2="460" y2="280" stroke="#999" strokeWidth="2" />
          {/* Globe sphere */}
          <circle cx="460" cy="240" r="16" fill={globeBlue} filter="url(#softShadow)" />
          {/* Continents */}
          <path d="M455 232 Q460 228 465 232 Q468 238 464 242 Q458 244 455 240 Z" fill={globeGreen} opacity="0.7" />
          <path d="M462 245 Q466 248 462 252 Q458 250 460 246 Z" fill={globeGreen} opacity="0.7" />
          {/* Globe highlight */}
          <ellipse cx="454" cy="234" rx="5" ry="8" fill="#fff" opacity="0.15" />
        </motion.g>

        {/* === LAMP (INTERACTIVE) === */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ cursor: "pointer" }}
          onClick={toggleDark}
        >
          {/* Lamp glow (visible in dark mode) */}
          {isDark && (
            <circle cx="515" cy="195" r="70" fill="url(#lampGlow)">
              <animate attributeName="r" values="65;75;65" dur="3s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Lamp base */}
          <ellipse cx="515" cy="286" rx="18" ry="5" fill={lampBase} />
          <rect x="510" y="286" width="10" height="4" rx="1" fill={lampBase} />
          
          {/* Lamp arm - lower */}
          <line x1="515" y1="286" x2="505" y2="230" stroke={lampArm} strokeWidth="4" strokeLinecap="round" />
          {/* Lamp arm - upper */}
          <line x1="505" y1="230" x2="522" y2="195" stroke={lampArm} strokeWidth="3" strokeLinecap="round" />
          {/* Joint */}
          <circle cx="505" cy="230" r="4" fill={lampArm} />

          {/* Lamp shade */}
          <motion.path
            d="M510 195 L534 195 L542 215 L502 215 Z"
            fill={lampShade}
            animate={isDark ? { rotate: [0, 2, 0] } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
          {/* Shade inner */}
          <path d="M512 197 L532 197 L538 213 L506 213 Z" fill={isDark ? "#b87830" : "#d09030"} />

          {/* Bulb */}
          <motion.circle
            cx="520" cy="216" r="5"
            fill={isDark ? bulbOn : bulbOff}
            animate={isDark ? { scale: [1, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Light rays in dark mode */}
          {isDark && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Cone of light */}
              <path
                d="M520 218 L460 290 L580 290 Z"
                fill="#ffe066"
                opacity="0.06"
              />
            </motion.g>
          )}

          {/* Hover indicator */}
          <motion.circle
            cx="520" cy="195" r="30"
            fill="none" stroke="#fff" strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0"
            whileHover={{ opacity: 0.3, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.g>

        {/* === DECORATIVE ELEMENTS === */}
        {/* Photo frame on wall — YOUR PHOTO */}
        <motion.g
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer" }}
        >
          {/* Frame shadow */}
          <rect x="77" y="77" width="56" height="66" rx="4" fill="#000" opacity="0.15" />
          {/* Outer frame */}
          <rect x="78" y="78" width="54" height="64" rx="3" fill={isDark ? "#3a3a4e" : "#d4c8b0"} stroke={isDark ? "#555" : "#b8a88a"} strokeWidth="1.5" />
          {/* Inner frame (mat) */}
          <rect x="84" y="84" width="42" height="52" rx="2" fill={isDark ? "#2a2a3e" : "#f5f0e8"} />
          {/* Clip path for the photo */}
          <clipPath id="photoClip">
            <rect x="87" y="87" width="36" height="46" rx="1" />
          </clipPath>
          {/* Your photo */}
          <image
            href="https://res.cloudinary.com/dlhevtzle/image/upload/v1761381729/Me_ftgmth.png"
            x="87" y="87" width="36" height="46"
            clipPath="url(#photoClip)"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Glass reflection effect */}
          <rect x="87" y="87" width="36" height="46" rx="1" fill="url(#glassReflect)" opacity="0.3" />
        </motion.g>

        {/* Small plant on wall shelf */}
        <rect x="470" y="100" width="60" height="5" rx="2" fill={isDark ? "#2a2a3e" : "#ddd"} />
        <path d="M475 100 L480 85 Q490 90 500 85 L505 100 Z" fill={plantPot} opacity="0.7" />
        <circle cx="490" cy="78" r="8" fill={leaf2} opacity="0.6" />
        <circle cx="483" cy="82" r="6" fill={leaf1} opacity="0.5" />
        <circle cx="497" cy="82" r="6" fill={leaf3} opacity="0.5" />
      </motion.svg>
    </div>
  );
}
