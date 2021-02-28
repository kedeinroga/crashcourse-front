import "./FrequentQuestions.css";
import Ask from "../UI/Ask";

function FrequentQuestions() {
  return (
    <div className="frequent-questions">
      <h4 className="frequent-questions--title">Preguntas frecuentes</h4>
      <div className="asks-content">
        <Ask />
        <Ask />
        <Ask />
        <Ask />
      </div>
    </div>
  );
}

export default FrequentQuestions;
