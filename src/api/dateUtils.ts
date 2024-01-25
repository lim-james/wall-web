export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const compareTimeStrings = (timeString1: string, timeString2: string): number => {
  const time1 = new Date(timeString1);
  const time2 = new Date(timeString2);

  if (time1 < time2) {
    return -1;
  } else if (time1 > time2) {
    return 1;
  } else {
    return 0;
  }
};
