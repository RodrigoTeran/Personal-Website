import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const getNewWord = (currentWord: string, position: number): string => {
  return currentWord.substring(0, position);
};

export const useTyping = (
  words: string[],
  setWord: Dispatch<SetStateAction<string>>,
  setIsWriting: Dispatch<SetStateAction<boolean>>,
  milisecondsToWrite: number, // 100 is best
  milisecondsToDelete: number, // 60 is best
  milisecondsBeforeStartToTypeAgain: number, // 10 is best
  milisecondsBeforeStartToDeleteWord: number // 40 is best
) => {
  const [isAdding, setIsAdding] = useState<boolean>(true);
  const currentWordIndex = useRef<number>(0);
  const currentLetterIndex = useRef<number>(0);

  useEffect(() => {
    if (isAdding) intervalLoop(1, milisecondsToWrite, true);
    if (!isAdding) intervalLoop(-1, milisecondsToDelete, false);
  }, [isAdding]);

  const saveWord = (currentWordDifference: number): void => {
    const newWord = getNewWord(
      words[currentWordIndex.current],
      currentLetterIndex.current
    );
    setWord(newWord);
    currentLetterIndex.current =
      currentLetterIndex.current + currentWordDifference;
  };

  const isTyping = (): boolean => {
    return (
      0 <= currentLetterIndex.current &&
      currentLetterIndex.current <= words[currentWordIndex.current].length
    );
  };

  const intervalLoop = (
    currentWordDifference: number,
    intervalTiming: number,
    isAdd: boolean
  ) => {
    var counter = 0;
    setIsWriting(true);
    const interval = setInterval(() => {
      if (isTyping()) {
        // Save letter
        saveWord(currentWordDifference);
      } else {
        setIsWriting(false);
        if (isAdd) checkToFinishAdding(counter, interval);
        if (!isAdd) checkToFinishDeleting(counter, interval);

        counter = counter + 1;
      }
    }, intervalTiming);
  };

  const checkToFinishAdding = (addCounter: number, interval: any) => {
    if (addCounter >= milisecondsBeforeStartToDeleteWord) {
      finishToAdd(interval);
    }
  };

  const finishToAdd = (interval: any): void => {
    /**
     * Get Max Value to start restating
     */
    currentLetterIndex.current = currentLetterIndex.current - 1;
    setIsAdding(false);
    clearInterval(interval);
  };

  const checkToFinishDeleting = (restateCounter: number, interval: any) => {
    if (restateCounter >= milisecondsBeforeStartToTypeAgain) {
      finishToDelete(interval);
    }
  };

  const finishToDelete = (interval: any): void => {
    /**
     * Change the position back to 0
     */
    currentLetterIndex.current = 0;
    changeWordToWrite();
    setIsAdding(true);
    clearInterval(interval);
  };

  const changeWordToWrite = (): void => {
    if (words.length - 1 == currentWordIndex.current) {
      currentWordIndex.current = 0;
    } else {
      currentWordIndex.current = currentWordIndex.current + 1;
    }
  };
};
