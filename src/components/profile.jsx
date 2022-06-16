import '../App.css';
import ProfileImage from '../images/image-jeremy.png';

function Profile() {

  return (
    <div className="component-container">
      <div className="profile-container profile-bg flex component-border">
        <div className="profile-image-container">
          <img src={ProfileImage} alt="Jeremy Robson profile" />
        </div>
        <div className="profile-text-container">
          <p className="fs-s accent-color">Report for</p>
          <p className="fs-l fw-s">Jeremy Robson</p>
        </div>
      </div>

      <div className="sub-container profile-sub-container component-border">
        <div className="filter-container flex">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;