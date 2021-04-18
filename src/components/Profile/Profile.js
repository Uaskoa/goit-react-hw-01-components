import PropTypes from "prop-types"
import defaultImg from "../default.jpg"
import "./Profile.scss"


const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        width="100"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li className="stats-list">
        <span className="label">Followers</span>
        <span className="quantity"> {stats.followers}</span>
      </li>
      <li className="stats-list">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="stats-list">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
    avatar: defaultImg,
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
