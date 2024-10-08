import PageWrapper from "./components/PageWrapper";
import { PageFive, PageFour, PageOne, PageThree, PageTwo } from "./pages";

function App() {
    return (
        <div aria-label="main" className="w-full">
            <PageOne />

            <PageWrapper>
                <PageTwo />
            </PageWrapper>

            <PageWrapper>
                <PageThree />
            </PageWrapper>

            <PageWrapper>
                <PageFour />
            </PageWrapper>

            <PageWrapper>
                <PageFive />
            </PageWrapper>
        </div>
    );
}

export default App;
