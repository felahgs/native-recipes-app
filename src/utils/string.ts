export const captalize = (str: string): string | null => {
  if (!str) {
    return null;
  }
  return str[0].toUpperCase() + str.substring(1);
};
