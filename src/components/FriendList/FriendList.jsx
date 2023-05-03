import css from './FriendList.module.css';
// import data from './friends.json';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendList}>
      <ul className={css.friendListItem}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li className={css.item} key={id}>
              <span className={`${css.status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
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
