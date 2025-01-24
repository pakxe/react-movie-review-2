const getBrowserLanguage = () => {
  const language = navigator.language || 'ko-KR';

  return language;
};

export default getBrowserLanguage;
