export const getRouteQuery = (route: Record<string, any>, key: string): string => {
  const value = route.query[key];

  if (!value) {
    return '';
  }

  return value as string;
};
