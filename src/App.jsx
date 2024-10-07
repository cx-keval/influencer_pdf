import PageWrapper from "./components/PageWrapper";
import { PageOne, PageTwo } from "./pages";

function App() {
    return (
        <div aria-label="main" className="w-full">
            <PageOne />

            <PageWrapper>
                <PageTwo />
            </PageWrapper>
        </div>
    );
}

export default App;
