import { ChangeEvent, ReactElement } from "react";

export interface IAppContext {
  categories: ICategories[];
  openedTab: string;
  setTab: (tabName: string) => void;
  userCategories: IUserCategories[];
  openedUserTab: string;
  setUserTab: (tabName: string) => void;
  searchParam: string;
  updateSearch: (value: string) => void;
  handleFormSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  navbarSearchParam: string;
  updateNavbarSearch: (value: string) => void;
  handleNavbarFormSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  searchResults: ISearchResults;
  fetchUser: (user: string) => void;
  userResults: IUserData;
}

export interface ICategories {
  title: string;
  count: number;
}

export interface IUserCategories {
  title: string;
  icon: ReactElement;
  count: number;
}

export interface ISearchResults {
  users: {
    // url is localhost/user?
    login: string;
    id: number | string;
    avatar_url: string;
  }[];
  repositories: {
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number | string;
    language: string;
    license: {
      name: string;
    };
    updated_at: string; // cut the string
  }[];
  topics: {
    // link is github.com/topics/name
    name: string;
    updated_at: string; // cut the string
  }[];
  commits: {
    sha: string; //cut the string
    repository: {
      full_name: string;
    };
    html_url: string;
    commit: {
      message: string;

      committer: {
        date: string; // cut the string
      };
    };
  }[];
  issues: {
    html_url: string;
    repository_url: string; // cut the string
    body: string;
    state: string;
    title: string;
    updated_at: string; // cut the string
    number: number | string;
  }[];
}

export interface IUserData {
  user: {
    avatar_url: string;
    bio: string;
    blog: string;
    followers: string;
    following: string;
    login: string;
    name: string;
    public_repos: string;
  };
  repositories: {
    name: string;
    html_url: string;
    language: string;
    updated_at: string; // cut the string
    private: boolean;
    description: string;
    stargazers_count: number;
  }[];
  starred: {
    name: string;
    html_url: string;
    language: string;
    updated_at: string; // cut the string
    private: boolean;
    description: string;
    stargazers_count: number;
  }[];
  following: {
    login: string;
    id: number | string;
    avatar_url: string;
  }[];
  followers: {
    login: string;
    id: number | string;
    avatar_url: string;
  }[];
}
