import { ContentContainer } from './components/contentContainer/ContentContainer';
import { Header } from './components/header/Header';
import { ViewContainer } from './components/viewContainer/ViewContainer';
import { WishList } from './components/wishList/WishList';

export default function App() {
  return (
    <>
    <Header/>
    <ViewContainer>
      <ContentContainer>
        <WishList/>
      </ContentContainer>
    </ViewContainer>
    </>
  );
}
