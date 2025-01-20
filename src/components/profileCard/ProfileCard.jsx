import { profileData } from "./data";
import "./styles.css";

function ProfileCard() {
  const { img, name, lastName, occupation, hobby } = profileData;
  return (
    <div className="profileCard-wrapper">
      <img src={img} />
      <h2>{`${name} ${lastName}`}</h2>
      <div>{occupation}</div>
      <div>
        Hobby:
        <ul>
          {hobby.map((hobbyItem) => (
            <li key={hobbyItem.id}>{hobbyItem.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
