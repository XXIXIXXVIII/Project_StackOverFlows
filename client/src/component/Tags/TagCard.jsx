import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TagCard({ props }) {
  const { nameTag, title, questionCount, questionCountToDay, questionCountWeek } = props;
  console.log(questionCountToDay);
  return (
    <div className="flex flex-col border border-[hsl(210,8%,85%)] p-3 gap-3 rounded">
      <div>
        <Link to={`/questions/tagged/${nameTag}`} className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
          {nameTag}
        </Link>
      </div>
      <div className="text-xs">
        <p>{title}</p>
      </div>
      <div className="flex justify-between text-[hsl(210,8%,55%)] text-xs">
        <div className="basis-[40%]">{questionCount} questions</div>
        <div className="flex-1">{questionCountToDay} asked today, {questionCountWeek} this week</div>
      </div>
    </div>
  );
}

TagCard.propTypes = {
  props: PropTypes.object,
  nameTag: PropTypes.string,
  title: PropTypes.string,
  questionCount: PropTypes.string,
  questionCountToDay: PropTypes.string,
  questionCountWeek: PropTypes.string,
};
