import PageWrapper from "./components/PageWrapper";
import { PageOne, PageThree, PageTwo } from "./pages";

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
        </div>
    );
}

export default App;
