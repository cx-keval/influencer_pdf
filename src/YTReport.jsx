import { IntroPage, PageWrapper } from "./components";
import { ProfileOverviewWithSocialScore } from "./pages";

const YTReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="YouTube" />

            <PageWrapper platform="youtube">
                <ProfileOverviewWithSocialScore platform="youtube" />
            </PageWrapper>
        </div>
    );
};

export default YTReport;
