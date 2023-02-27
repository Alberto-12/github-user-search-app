import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import SearchIcon from "../assets/icon-search.svg";
import Location from "../assets/icon-location.svg";
import Website from "../assets/icon-website.svg";
import Twitter from "../assets/icon-twitter.svg";
import Company from "../assets/icon-company.svg";
import { useState, useEffect } from "react";

const Searcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => {
        if (!res.ok) {
          setError(true);
          return;
        }
        setError(false);
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error();
        }
        setError(false);
        setErrorMessage("");
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch(() => {
        setError(true);
        setErrorMessage("No result");
      });
  };

  return (
    <div id="container" className={darkMode ? "dark-mode" : ""}>
      
      <header id="header">
        <h1 id="title">devfinder</h1>
        <button
          typ="button"
          id="btn-mode"
          onClick={() => setDarkMode(!darkMode)}
        >
          <p
          className="icons"
            id="mode-text"
          >
            {darkMode ? "Light" : "Dark"}
          </p>
          <img
            className="icons"
            id="moonIcon"
            src={darkMode ? Sun : Moon}
            alt="Icon Sun/Moon"
          />
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          id="search-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            backgroundImage: `url(${SearchIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5% center",
            paddingLeft: "14%",
          }}
        />
        {error && <div id="error-message">{errorMessage}</div>}
        <button type="submit" id="search-button">
          Search
        </button>
      </form>
      <div id="main">
        <div id="profile-section">
          <div id="profile-container">
            <img id="profile" src={userData.avatar_url} alt="User Profile" />
          </div>
          <div id="username-section">
            <h3 id="user-name">{userData.name}</h3>
            <a href="/" id="user-login">
              @{userData.login}
            </a>
            <p id="join-date">
              {`Joined ${
                userData.created_at
                  ? new Date(userData.created_at).toDateString()
                  : ""
              }`}{" "}
            </p>
          </div>
        </div>
        <p id="user-bio">
          {userData.bio ? (
            userData.bio
          ) : (
            <span className="missing-bio">This user has no bio</span>
          )}
        </p>
        <div id="grid-div">
          <div id="repos">Repos</div>
          <div id="followers">Followers</div>
          <div id="following">Following</div>
          <div id="repos-number">{userData.public_repos}</div>
          <div id="followers-number">{userData.followers}</div>
          <div id="following-number">{userData.following}</div>
        </div>
        <div id="links-grid">
          <img
            id="location"
            src={Location}
            alt="Icon Location"
            style={{ opacity: !userData.location ? 0.5 : 1 }}
          />
          <a href="/" id="location-link">
            {userData.location ? (
              userData.location
            ) : (
              <span className="not-available">Not Available</span>
            )}
          </a>
          <img
            id="website"
            src={Website}
            alt="Icon Website"
            style={{ opacity: !userData.blog ? 0.5 : 1 }}
          />

          <a href="/" id="blog">
            {userData.blog ? (
              userData.blog
            ) : (
              <span className="not-available">Not Available</span>
            )}
          </a>
          <img
            id="twitter"
            src={Twitter}
            alt="Icon Twitter"
            style={{ opacity: !userData.twitter ? 0.5 : 1 }}
          />
          <a href="/" id="twitter-link">
            {userData.twitter_username ? (
              userData.twitter_username
            ) : (
              <span className="not-available">Not Available</span>
            )}
          </a>
          <img
            id="company"
            src={Company}
            alt="Icon company"
            style={{ opacity: !userData.company ? 0.5 : 1 }}
          />
          <a href="/" id="company-link">
            {userData.company ? (
              userData.company
            ) : (
              <span className="not-available">Not Available</span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
