import { ContentContainer } from "../contentContainer/ContentContainer";
import { Header } from "../header/Header";
import { ViewContainer } from "../viewContainer/ViewContainer";

export default function AppScreen({ children }) {
  return (
    <>
      <Header />
      <ViewContainer>
        <ContentContainer>{children}</ContentContainer>
      </ViewContainer>
    </>
  );
}
