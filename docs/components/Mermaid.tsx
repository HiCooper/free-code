'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;

function initMermaid() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    securityLevel: 'loose',
    fontFamily: 'inherit',
  });
  initialized = true;
}

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    initMermaid();
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
    mermaid
      .render(id, chart)
      .then(({ svg }) => setSvg(svg))
      .catch((err) => {
        console.error('Mermaid render error:', err);
        setSvg(`<pre>Diagram render error</pre>`);
      });
  }, [chart]);

  return (
    <div
      ref={ref}
      className="my-6 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
