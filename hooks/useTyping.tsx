import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export const useTyping = (
  words: string[],
  setWord: Dispatch<SetStateAction<string>>,
  setIsWriting: Dispatch<SetStateAction<boolean>>
) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);
  const currentWord = useRef<number>(0);
  const currentWordPosition = useRef<number>(0);

  useEffect(() => {
    if (isAdding) add();
    if (!isAdding) restate();
  }, [isAdding]);

  const add = () => {
    var addCounter = 0;
    setIsWriting(true);
    const interval = setInterval(() => {
      if (
        0 <= currentWordPosition.current &&
        currentWordPosition.current <= words[currentWord.current].length
      ) {
        // Add
        const newWord = addLetter(
          words[currentWord.current],
          currentWordPosition.current
        );
        setWord(newWord);
        currentWordPosition.current = currentWordPosition.current + 1;
      } else {
        setIsWriting(false);
        if (addCounter >= 40) {
          currentWordPosition.current = currentWordPosition.current - 1; // Get Max Value
          setIsAdding(false);
          clearInterval(interval);
        }
        addCounter = addCounter + 1;
      }
    }, 100);
  };

  const restate = () => {
    var restateCounter = 0;
    setIsWriting(true);
    const interval = setInterval(() => {
      if (
        0 <= currentWordPosition.current &&
        currentWordPosition.current <= words[currentWord.current].length
      ) {
        // Restate
        const newWord = addLetter(
          words[currentWord.current],
          currentWordPosition.current
        );
        setWord(newWord);
        currentWordPosition.current = currentWordPosition.current - 1;
      } else {
        setIsWriting(false);
        if (restateCounter >= 10) {
          currentWordPosition.current = 0; // Set to 0 again
          // Wait to write the next word
          // Change word
          if (words.length - 1 == currentWord.current) {
            currentWord.current = 0;
          } else {
            currentWord.current = currentWord.current + 1;
          }
          setIsAdding(true);
          clearInterval(interval);
        }
        restateCounter = restateCounter + 1;
      }
    }, 60);
  };

  const addLetter = (currentWord: string, position: number): string => {
    return currentWord.substring(0, position);
  };
};
