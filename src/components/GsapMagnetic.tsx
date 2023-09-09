import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapMagnetic = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: any;
  onClick: any;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current?.getBoundingClientRect();
      console.log(width, height, top, left);
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e: any) => {
      xTo(0);
      yTo(0);
    };

    ref.current && ref.current.addEventListener("mousemove", mouseMove);
    ref.current && ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current && ref.current.addEventListener("mousemove", mouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current && ref.current.addEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return (
    <div ref={ref} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default GsapMagnetic;
