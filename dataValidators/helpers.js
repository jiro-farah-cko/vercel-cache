export const isFirstElementValid = (arr) => {
  const [firstElement] = arr || [];
  const { type, text } = firstElement || {};
  return !!(type && text && text.length > 0);
};