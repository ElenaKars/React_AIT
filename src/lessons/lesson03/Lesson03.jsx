import AnimalCard from "../../components/animalCard/Animal";
import Button from "../../components/Button/Button";
import { lionData, zebraData, hippoData } from "./data";
import "./styles.css";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImg={lionData.image}
      />
      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}
      >
        <div>One of the main character</div>
        <Button name="Get More Info" />
      </AnimalCard>
      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
      />
      {/* <Button name="Send data" />
      <Button name="Get" />
      <Button /> */}
    </div>
  );
}

export default Lesson03;
