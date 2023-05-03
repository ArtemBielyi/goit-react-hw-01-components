import css from './FriendList.module.css';
// import data from './friends.json';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <section className="friendList">
      <ul className="FriendListItem">
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li className="item" key={id}>
              <span className="status">{isOnline}</span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
