import "./styles.css";
import Button from "../Button/Button";
//A named import requires using the exact name that was used during the export. The name of the exported data is enclosed in curly braces
import { lessonData } from "./data";

function LessonCard() {
  console.log(lessonData);
  return (
    <div className="lesson-card-wrapper">
      <img src={lessonData.lesson_img} />
      <h3>Lesson {lessonData.lesson_number}</h3>
      <div>Topic: {lessonData.topic}</div>
      <div>Teacher: {lessonData.teacher_name}</div>
      <Button />
    </div>
  );
}

export default LessonCard;
