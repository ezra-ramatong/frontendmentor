function fluidType(min, max, minVw = 375, maxVw = 600) {
  const slope = (max - min) / (maxVw - minVw);
  const intercept = min - slope * minVw;

  return `clamp(${min}px, ${intercept.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${max}px)`;
}

// Usage: fluidType(14, 16) returns "clamp(14px, 10.67px + 0.89vw, 16px)"

const small = fluidType(12, 14, 375, 1440);
const medium = fluidType(14, 16, 375, 1440);
const lg = fluidType(20, 24, 375, 1440);

console.log("small:", small);
console.log("medium:", medium);
console.log("large:", lg);
