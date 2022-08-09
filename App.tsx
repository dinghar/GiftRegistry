import AppScreen from "./components/appScreen/appScreen";
import { LoginForm } from "./components/loginForm/LoginForm";
import { WishList } from "./components/wishList/WishList";

export default function App() {
  return (
    <>
      <AppScreen>
        <WishList />
      </AppScreen>
    </>
  );
}
