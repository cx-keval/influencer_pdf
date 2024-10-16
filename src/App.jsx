import PageWrapper from "./components/PageWrapper";
import {
    PageEight,
    PageFive,
    PageFour,
    PageOne,
    PageSeven,
    PageSix,
    PageThree,
    PageTwo,
} from "./pages";

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

            <PageWrapper>
                <PageSix />
            </PageWrapper>

            <PageWrapper>
                <PageSeven />
            </PageWrapper>

            <PageWrapper>
                <PageEight />
            </PageWrapper>
        </div>
    );
}

export default App;
