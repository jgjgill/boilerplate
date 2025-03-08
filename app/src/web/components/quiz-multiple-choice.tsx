import { useState } from "react";

interface QuizMultipleChoiceProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export default function QuizMultipleChoice({
  question,
  options,
  correctIndex,
  explanation,
}: QuizMultipleChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) {
      return;
    }
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (isSubmitted || selectedIndex === null) {
      return;
    }

    setIsSubmitted(true);
  };

  const isCorrect = selectedIndex === correctIndex;

  return (
    <div className="quiz-multiple-choice">
      <h3>{question}</h3>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              className={`
              option
              ${selectedIndex === index ? "selected" : ""}
              ${isSubmitted && index === correctIndex ? "correct" : ""}
              ${isSubmitted && selectedIndex === index && !isCorrect ? "incorrect" : ""}
            `}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={selectedIndex === null || isSubmitted}
        className="submit-button"
      >
        제출
      </button>

      {isSubmitted && (
        <div
          className={`result ${isCorrect ? "correct-result" : "incorrect-result"}`}
        >
          <p>
            {isCorrect ? "정답입니다! 👏" : "오답입니다. 다시 시도해보세요."}
          </p>
          {explanation && <p className="explanation">{explanation}</p>}
        </div>
      )}
    </div>
  );
}
