import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체 상품페이지,로그인,상품상세페이지
//ㄴ Nvigation val만들기
//2. 전체상품을 볼수있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나 로그인이 안되었을 경우 로그인 페이지가 먼저나온다.
//5.로그인이 되어 있을경우에는 상품 디테일 페이지를 볼수있다.
//6.로그아웃 버튼을 누르면 로그아웃이 된다.
//7.로그아웃이 되면 상품디테일 페이지를 볼수없다. 다시 로그인 페이지가 된다.
//8. 로그인을 하면 로그아웃이 보이고,로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenTicate] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("authenticate", authenticate);
  //   //  이씨!!!! 아효navigate("/");
  // }, [authenticate]);
  return (
    <div>
      <Navbar setAuthenTicate={setAuthenTicate} result={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenTicate={setAuthenTicate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
