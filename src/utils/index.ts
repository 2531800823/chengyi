export const vw = (px: number | string): string => {
  if (typeof px === 'string') {
    return px
      .split(' ')
      .map((item) => vw(Number(item)))
      .join(' ');
  }
  return (Number(px) / 10.8).toFixed(5) + 'vw';
};
