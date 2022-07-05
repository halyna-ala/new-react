import PropTypes from 'prop-types';
import css from "./Profile.module.css";

export const Profile = (props) =>  {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }=props;
   
    return (
        <div className ={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={css.avatar}
    />
    <p className={css.name}>Name: {name}</p>
    <p className={css.tag}>Tag: {tag}</p>
    <p className={css.location}>Location: {location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    );
    }

Profile.propTypes = {
    name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),

};

// export default Profile;