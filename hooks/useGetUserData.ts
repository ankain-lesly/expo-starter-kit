import { useEffect } from "react";

export const useGetUserData = () => {
  // const [user, setUser] = useState<UserType>();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLoggedInUserData = async () => {
      // api tokens
    };
    getLoggedInUserData();
  }, []);

  return { loading: false, user: null };
};
