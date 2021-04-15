import PropTypes from "prop-types";
import defaultImg from "./default.jpg";


const FriendList = ({ friends }) => (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key= {id}>
              <span>{ isOnline}</span>
              <img src={ avatar} alt={name} width="48" />
              <p>{ name}</p>
        </li>
      ))}
    </ul>
)

// не уверенна
FriendList.defaultProps = {
  avatar: defaultImg,
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
  )
};

export default FriendList;