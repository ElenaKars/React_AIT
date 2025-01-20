import { profileData } from "./data";
import "./styles.css";

function ProfileCard() {
  return (
    <div className="profileCard-wrapper">
      <img src={profileData.img} />
      <h2>{`${profileData.name} ${profileData.lastName}`}</h2>
      <div>{profileData.occupation}</div>
      <div>
        Hobby:
        <ul>
          {profileData.hobby.map((hobbyItem) => (
            <li key={hobbyItem.id}>{hobbyItem.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
