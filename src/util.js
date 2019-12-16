export const getDocumentScrollHeight = () => {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );
};

export const getDocumentScrollTop = () => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );
};

export const getDocumentClientHeight = () => {
  return document.documentElement.clientHeight;
};

export const getDocumentScrollBottom = () => {
  return getDocumentScrollHeight() - getDocumentScrollTop() - getDocumentClientHeight();
};
