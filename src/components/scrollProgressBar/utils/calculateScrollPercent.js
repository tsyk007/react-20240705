export const calculateScrollPercent = () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  let docHeight = document.documentElement.scrollHeight;

  let winHeight = window.innerHeight;

  return `${(scrollTop / (docHeight - winHeight)) * 100}%`;
};
