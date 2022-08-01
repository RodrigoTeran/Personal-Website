// Modules
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const getNewWord = (currentWord: string, position: number): string => {
  return currentWord.substring(0, position);
};

type Params = {
  words: string[];
  setWord: Dispatch<SetStateAction<string>>;
  setIsWriting: Dispatch<SetStateAction<boolean>>;
  milisecondsToWrite?: number;
  milisecondsToDelete?: number;
  milisecondsBeforeStartToTypeAgain?: number;
  milisecondsBeforeStartToDeleteWord?: number;
};

export const useTyping = ({
  words,
  setWord,
  setIsWriting,
  milisecondsToWrite = 100,
  milisecondsToDelete = 60,
  milisecondsBeforeStartToTypeAgain = 10,
  milisecondsBeforeStartToDeleteWord = 40,
}: Params) => {
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
      if (!isTyping()) {
        setIsWriting(false);
        if (isAdd) checkToFinishAdding(counter, interval);
        if (!isAdd) checkToFinishDeleting(counter, interval);

        counter += 1;
        return;
      }

      // Save letter
      saveWord(currentWordDifference);
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
    if (words.length - 1 != currentWordIndex.current) {
      currentWordIndex.current = currentWordIndex.current + 1;
      return;
    }
    currentWordIndex.current = 0;
  };
};
