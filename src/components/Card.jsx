import React, { useState, useContext, useCallback, useMemo } from "react";
import { getRandomCard, checkInputCorrect } from "../cards";
import { ScoreContext } from "../context/ScoreContext";
import { AnswerButton, CardContainer, cardVariants } from "./styled";

function Card() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);

  /**
   * @desc Decides what flashcard to show
   */
  const [card, setCard] = useState(getRandomCard());

  const [correct, setCorrect] = useState(null);

  const setCorrectAnswer = (state) => {
    setCorrect(state);
    setTimeout(() => {
      setCorrect(null);
    }, 400)
  }

  const selectWritingSystem = (type) => {
    switch (type) {
      case "hiragana":
        return card.hiragana;
      case "katakana":
        return card.katakana;
      case "romanji":
        return card.romanji[0];
      default:
        throw new Error("Invalid writing system.");
    }
  };

  const generateAnswers = useCallback(() => {
    if (card) {
      return [
        getRandomCard(card.romanji[0]).romanji[0],
        getRandomCard(card.romanji[0]).romanji[0],
        card.romanji[0],
      ].sort(() => Math.random() - 0.5);
    }
    return [];
  }, [card]);

  const sumbitAnswer = useCallback(
    (answer) => {
      if (checkInputCorrect(answer, card)) {
        setCard(getRandomCard());
        setCorrectAnswer(true);
        dispatch({ type: "INCREMENT_SCORE" });
        dispatch({ type: "UPDATE_BACKGROUND" });
      } else {
        setCorrectAnswer(false);
      }
      dispatch({ type: "INCREMENT_TRIES" });
    },
    [setCard, dispatch, card]
  );

  const SelectAnswer = useMemo(() => {
    if (card) {
      return generateAnswers().map((answer) => (
        <AnswerButton type="button" onClick={() => sumbitAnswer(answer)}>
          {answer}
        </AnswerButton>
      ));
    }
    return <div />;
  }, [card, generateAnswers, sumbitAnswer]);

  const setBorderColor = useCallback((state) => {
    if (state === null) {
      return "default";
    }
    return state ? "success" : "fail";
  }, []);

  return (
    <CardContainer
      animate={setBorderColor(correct)}
      variants={cardVariants}
    >
      <h1 className="Hiragana">{selectWritingSystem(writingsystem)}</h1>
      <div className="Answer">{SelectAnswer}</div>
    </CardContainer>
  );
}

export default Card;
