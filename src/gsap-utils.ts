import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(DrawSVGPlugin);

gsap.config({ nullTargetWarn: false });

export const gsapUtils = {
  gsap,
  ScrollTrigger,
  DrawSVGPlugin,
};
