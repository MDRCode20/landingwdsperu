

const title = "Impulsa tu marca con diseño profesional";

export default function AnimatedTitle() {
  return (
    <h2 className="text-2xl font-extrabold mb-6 custom-animated-title">
      {title.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${(i + 2) * 1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}

