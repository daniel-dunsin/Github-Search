import {
  useContext,
  createContext,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import {
  IAppContext,
  ICategories,
  ISearchResults,
  IUserCategories,
  IUserData,
} from "../interfaces";
import { BiBook, BiStar, BiBookOpen } from "react-icons/bi";
import getGithubDetails from "../utils/getGithubDetails";
import { useRouter } from "next/router";
import getGithubUser from "../utils/getGithubUser";

const AppContext = createContext({} as IAppContext);

const tempCategories: ICategories[] = [
  { title: "Repositories", count: 0 },
  { title: "Commits", count: 0 },
  { title: "Issues", count: 0 },
  { title: "Topics", count: 0 },
  { title: "Users", count: 0 },
];
const tempUserCatgories: IUserCategories[] = [
  {
    title: "Repositories",
    count: 0,
    icon: <BiBook />,
  },
  {
    title: "Stars",
    count: 0,
    icon: <BiStar />,
  },
];

export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [categories, setCategories] = useState<ICategories[]>([
    ...tempCategories,
  ]);
  const [openedTab, setOpenedTab] = useState<string>("Repositories");
  const [userCategories, setUserCategories] = useState<IUserCategories[]>([
    ...tempUserCatgories,
  ]);
  const [openedUserTab, setOpenedUserTab] = useState<string>("Repositories");
  const [searchParam, setSearchParam] = useState<string>("");
  const [navbarSearchParam, setNavbarSearchParam] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISearchResults>();
  const [userResults, setUserResults] = useState<IUserData>();
  const setUserTab = (tabName: string): void => {
    setOpenedUserTab(tabName);
  };

  const setTab = (tabName: string): void => {
    setOpenedTab(tabName);
  };

  const updateSearch = (value: string) => {
    setSearchParam(value);
  };
  const updateNavbarSearch = (value: string) => {
    setNavbarSearchParam(value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchParam) {
      getGithubDetails(searchParam).then((data) => {
        setSearchResults(data);
        router.push("/search");
      });
    }
  };
  const handleNavbarFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (navbarSearchParam) {
      getGithubDetails(navbarSearchParam).then((data) => {
        setSearchResults(data);
        router.push("/search");
      });
    }
  };

  const fetchUser = async (user: string) => {
    const userDetails = await getGithubUser(user);
    setUserResults(userDetails);
    setUserCategories((prev: IUserCategories[]): IUserCategories[] => {
      const items = prev.map((item) => {
        if (item.title.toLowerCase() === "repositories") {
          item.count = userResults?.repositories?.length;
        } else if (item.title.toLowerCase() === "stars") {
          item.count = userResults?.starred?.length;
        }
        return item;
      });
      return items;
    });
  };

  useEffect(() => {
    if (searchResults) {
      setCategories((prev: ICategories[]): ICategories[] => {
        const items = prev.map((item) => {
          item.count =
            searchResults[
              item.title.toLowerCase() as keyof ISearchResults
            ].length;
          return item;
        });
        return items;
      });
    }
  }, [searchResults]);

  return (
    <AppContext.Provider
      value={{
        categories,
        openedTab,
        setTab,
        openedUserTab,
        setUserTab,
        userCategories,
        searchParam,
        updateSearch,
        handleFormSubmit,
        navbarSearchParam,
        updateNavbarSearch,
        handleNavbarFormSubmit,
        searchResults,
        fetchUser,
        userResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): IAppContext => useContext(AppContext);
