import { fetchGithub } from "../axios.config";
import { ISearchResults } from "../interfaces";

const getGithubDetails = async (
  searchParam: string
): Promise<ISearchResults> => {
  const { data: users } = await fetchGithub(
    `/search/users?q=${searchParam.trim()}&per_page=10&page=1&client_id=a5cae3d33a4eec9b4c93&client_secret=aaf692e189c1175dc6fa8993b8c83456c2d45198`
  );
  const { data: repositories } = await fetchGithub(
    `/search/repositories?q=${searchParam.trim()}&per_page=10&page=1&client_id=a5cae3d33a4eec9b4c93&client_secret=aaf692e189c1175dc6fa8993b8c83456c2d45198`
  );
  const { data: commits } = await fetchGithub(
    `/search/commits?q=${searchParam.trim()}&per_page=10&page=1&client_id=a5cae3d33a4eec9b4c93&client_secret=aaf692e189c1175dc6fa8993b8c83456c2d45198`
  );
  const { data: issues } = await fetchGithub(
    `/search/issues?q=${searchParam.trim()}&per_page=10&page=1&client_id=a5cae3d33a4eec9b4c93&client_secret=aaf692e189c1175dc6fa8993b8c83456c2d45198`
  );
  const { data: topics } = await fetchGithub(
    `/search/topics?q=${searchParam.trim()}&per_page=20&page=1&client_id=a5cae3d33a4eec9b4c93&client_secret=aaf692e189c1175dc6fa8993b8c83456c2d45198`
  );

  return {
    users: users?.items,
    repositories: repositories?.items,
    commits: commits?.items,
    issues: issues?.items,
    topics: topics?.items,
  };
};

export default getGithubDetails;
