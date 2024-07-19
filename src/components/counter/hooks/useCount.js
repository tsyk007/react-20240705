const useCount = ({ setValue, min, max, step = 1 }) => {
  const increase = () => {
    setValue((prev) => (prev + step > max ? max : prev + step));
  };

  const decrease = () => {
    setValue((prev) => (prev - step < min ? min : prev - step));
  };

  return { increase, decrease };
};

export default useCount;
