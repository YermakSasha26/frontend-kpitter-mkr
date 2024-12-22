import React from 'react';
import axios from '../axios';
import Cookies from 'js-cookie';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { RiGroupLine, RiUserFollowLine, RiFileTextLine } from 'react-icons/ri';
import { RiErrorWarningLine } from 'react-icons/ri';

function Profile() {
  const [user, setUser] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  const { username } = useParams();

  React.useEffect(() => {
    const getUserInfo = async (username) => {
      try {
        const { data } = await axios.get(`/users/${username}`);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfo(username);

    const getUserPosts = async (username, page = 1) => {
      const token = Cookies.get('auth_token');
      try {
        const { data } = await axios.get(`/users/${username}/posts`, {
          params: { page },
          headers: {
            Authorization: `Basic ${token}`,
          },
        });
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserPosts(username);
  }, [username]);

  return (
    <>
      <Header />
      <div className="profile-container">
        {user ? (
          <div className="profile-details">
            {/* Ліва секція профілю */}
            <div className="profile-info">
              <div className="profile-avatar">
                <img
                  src="https://via.placeholder.com/120" // статична фотографія
                  alt="Аватар користувача"
                  className="avatar"
                />
                {user.full_name && <h5 className="profile-name">{user.full_name}</h5>}
                <p className="profile-username">@{user.username}</p>
              </div>
            </div>

            {/* Права секція постів */}
            <div className="profile-posts">
              <h4 className="posts-title">Пости</h4>
              {posts.length > 0 ? (
                <div className="posts-list">
                  {posts.map((post) => (
                    <div className="post-item" key={post.id}>
                      <Post post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-posts">Немає доступних постів.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="profile-not-found">
            <RiErrorWarningLine size={120} color="#aaa" />
            <h4 className="text-center text-muted mt-3">
              {`Користувача з ім'ям @${username} не знайдено.`}
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
