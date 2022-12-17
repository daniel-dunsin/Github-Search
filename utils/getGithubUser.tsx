import { fetchGithub } from "../axios.config";

const getGithubUser = async (user: string) => {
  const getUser = await fetchGithub(`/users/${user}`);
  const userRepos = await fetchGithub(
    `/users/${user}/repos?per_page=20&page=1`
  );
  const userStarredRepos = await fetchGithub(
    `/users/${user}/starred?per_page=20&page=1`
  );
  const userFollowers = await fetchGithub(`/users/${user}/followers`);
  const userFollowing = await fetchGithub(`/users/${user}/following`);

  return {
    user: getUser.data,
    repositories: userRepos.data,
    starred: userStarredRepos.data,
    following: userFollowing.data,
    followers: userFollowers.data,
  };
};

export default getGithubUser;
