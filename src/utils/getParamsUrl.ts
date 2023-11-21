export function getQueryParam(url: string, paramName: string) {
  const queryString = url.split('?')[1];
  if (!queryString) return null;

  const params = queryString.split('&');
  for (const param of params) {
    const [key, value] = param.split('=');
    if (key === paramName) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
