export function stringToMediumColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // extract base RGB from hash
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;

  // map values into a medium range (80–200)
  const scale = (val: number) => 80 + (val % 120); // 80 → 200 range

  const midR = scale(r);
  const midG = scale(g);
  const midB = scale(b);

  return `rgb(${midR}, ${midG}, ${midB})`;
}
