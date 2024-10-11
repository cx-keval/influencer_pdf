import PageWrapper from "./components/PageWrapper";
import {
    PageFive,
    PageFour,
    PageOne,
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
        </div>
    );
}

export default App;
