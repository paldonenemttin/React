import { useHistory } from "react-router-dom";
import { UserContext } from "../context/AppContextProvider";
import { useCallback, useEffect } from "react";
import { fetchUser } from "../modules/fetchMoudle";

const Route = ({ children }) => {
  const { setUser } = UserContext();
  const history = useHistory();

  // user state 정보가 정말 로그인한 정상사용자 인지 ??
  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);

  // <AuthRoute>내용 </AuthRoute>
  return <>{children}</>;
};

export default Route;
