interface URL {
  pathname: string;
}

export const load = ({ url }: { url: URL }) => {
  const currentRoute = url.pathname;

  return {
  currentRoute
};
};
