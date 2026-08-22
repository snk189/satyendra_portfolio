import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Layer {
  key: "input" | "hidden" | "output";
  label: string;
  count: number;
  x: number;
  info: string;
}

const layers: Layer[] = [
  { key: "input", label: "Input Layer", count: 5, x: 40, info: "Participants feed live text input, converted into embeddings." },
  { key: "hidden", label: "Hidden Layer", count: 7, x: 220, info: "Weighted connections apply scaling, activation, and combine incoming signals." },
  { key: "output", label: "Output Layer", count: 4, x: 400, info: "Softmax turns combined signals into a probability distribution shown live." },
];

const WIDTH = 440;
const HEIGHT = 260;

function nodeY(index: number, count: number) {
  const top = 30;
  const bottom = HEIGHT - 30;
  if (count === 1) return (top + bottom) / 2;
  return top + (index * (bottom - top)) / (count - 1);
}

export function NeuralNetworkViz() {
  const [hoverLayer, setHoverLayer] = useState<Layer["key"] | null>(null);
  const reduced = usePrefersReducedMotion();

  const connections = useMemo(() => {
    const result: { x1: number; y1: number; x2: number; y2: number; from: Layer["key"] }[] = [];
    for (let l = 0; l < layers.length - 1; l++) {
      const a = layers[l];
      const b = layers[l + 1];
      for (let i = 0; i < a.count; i++) {
        for (let j = 0; j < b.count; j++) {
          result.push({
            x1: a.x,
            y1: nodeY(i, a.count),
            x2: b.x,
            y2: nodeY(j, b.count),
            from: a.key,
          });
        }
      }
    }
    return result;
  }, []);

  const activeInfo = layers.find((l) => l.key === hoverLayer);

  return (
    <div>
      <div className="rounded-sm border border-line bg-bg-panel/50 p-4 sm:p-6">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-auto"
          role="img"
          aria-label="Diagram of input, hidden, and output neural network layers"
        >
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke={hoverLayer && hoverLayer !== c.from ? "rgba(90,169,255,0.06)" : "rgba(90,169,255,0.18)"}
              strokeWidth={1}
            />
          ))}

          {!reduced &&
            connections.slice(0, 14).map((c, i) => (
              <circle key={`pulse-${i}`} r={1.6} fill="#8EC6FF">
                <animateMotion
                  dur={`${3 + (i % 5) * 0.6}s`}
                  repeatCount="indefinite"
                  path={`M${c.x1},${c.y1} L${c.x2},${c.y2}`}
                  begin={`${(i % 7) * 0.4}s`}
                />
              </circle>
            ))}

          {layers.map((layer) => (
            <g
              key={layer.key}
              onMouseEnter={() => setHoverLayer(layer.key)}
              onMouseLeave={() => setHoverLayer(null)}
              className="cursor-pointer"
            >
              <rect
                x={layer.x - 26}
                y={8}
                width={52}
                height={HEIGHT - 16}
                fill="transparent"
              />
              {Array.from({ length: layer.count }).map((_, i) => {
                const y = nodeY(i, layer.count);
                const isActive = hoverLayer === layer.key;
                return (
                  <motion.circle
                    key={i}
                    cx={layer.x}
                    cy={y}
                    r={isActive ? 7 : 5.5}
                    fill={isActive ? "#8EC6FF" : layer.key === "hidden" ? "#FFB454" : "#5AA9FF"}
                    fillOpacity={isActive ? 1 : 0.85}
                    animate={
                      reduced
                        ? undefined
                        : { cy: [y, y - 3, y] }
                    }
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                  />
                );
              })}
              <text
                x={layer.x}
                y={HEIGHT - 4}
                textAnchor="middle"
                className="mono-label"
                fontSize="9"
                fill={hoverLayer === layer.key ? "#8EC6FF" : "#5C6478"}
              >
                {layer.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-4 min-h-[52px] rounded-sm border border-line-soft bg-bg-panel/30 px-4 py-3">
        {activeInfo ? (
          <p className="text-sm text-ink-dim">
            <span className="text-signal font-medium">{activeInfo.label}: </span>
            {activeInfo.info}
          </p>
        ) : (
          <p className="text-sm text-ink-faint">Hover a layer to see how it works.</p>
        )}
      </div>
    </div>
  );
}
