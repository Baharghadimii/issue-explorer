import { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);

  function transition(mode) {
    setMode(mode);
  }
  return { transition, mode }
}