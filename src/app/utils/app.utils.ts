export function getStartAndEndOfDay(date: Date): {
  startOfDay: string;
  endOfDay: string;
} {
  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );
  const endOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999
  );

  return {
    startOfDay: startOfDay.toISOString(),
    endOfDay: endOfDay.toISOString(),
  };
}
