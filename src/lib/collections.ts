export const byOrder = <T extends { data: { order: number } }>(
  entries: T[],
): T[] => [...entries].sort((a, b) => a.data.order - b.data.order);
