const formatNames = (names: string[]): string => {
  if (names.length === 1) return names[0];
  if (names.length === 2) return names.join(' and ');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
};

export default formatNames;
