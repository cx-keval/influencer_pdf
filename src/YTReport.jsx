import { IntroPage, PageWrapper } from "./components";
import { ContentAnalysis, ProfileOverviewWithSocialScore } from "./pages";

const YTReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="YouTube" />

            <PageWrapper platform="youtube">
                <ProfileOverviewWithSocialScore platform="youtube" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <ContentAnalysis platform="youtube" type="shorts" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <ContentAnalysis platform="youtube" type="videos" />
            </PageWrapper>
        </div>
    );
};

export default YTReport;
