import { useCallback, useMemo, useRef } from "react";
import { CreateTypes, Options, Origin } from "canvas-confetti";
import ReactCanvasConfetti from "react-canvas-confetti";

export function useConfetti() {
  const refAnimationInstance = useRef<CreateTypes | null>(null);
  const getInstance = useCallback((instance: CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((origin: Origin, opts?: Options) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: origin,
      });
  }, []);

  const fire = useCallback(
    (origin: Origin = { y: 0.7 }) => {
      makeShot(origin, {
        spread: 60,
        particleCount: 40,
      });

      makeShot(origin, {
        spread: 120,
        startVelocity: 45,
        particleCount: 20,
      });
    },
    [makeShot]
  );

  const canvas = useMemo(() => {
    return (
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    );
  }, [getInstance]);

  return {
    canvas,
    fire,
  };
}
