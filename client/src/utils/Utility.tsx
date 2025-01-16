export const formatName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
