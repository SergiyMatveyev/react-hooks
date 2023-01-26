import { useContext, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

export const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.name);
    getRepos(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Home page
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: 150 }} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}{" "}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong> {company}{" "}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}{" "}
                  </li>
                )}
              </ul>

              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Follow: {following}</div>
              <div className="badge badge-info">Repos: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};
