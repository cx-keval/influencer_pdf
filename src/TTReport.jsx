import { IntroPage, PageWrapper } from "./components";
import { ProfileOverviewWithSocialScore } from "./pages";

const TTReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="TikTok" />

            <PageWrapper platform="tiktok">
                <ProfileOverviewWithSocialScore platform="tiktok" />
            </PageWrapper>
        </div>
    );
};

export default TTReport;
