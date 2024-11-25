import { IntroPage, PageWrapper } from "./components";
import { ProfileOverviewWithSocialScore } from "./pages";

const IGReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="instagram" />

            <PageWrapper platform="instagram">
                <ProfileOverviewWithSocialScore platform="instagram" />
            </PageWrapper>
        </div>
    );
};

export default IGReport;
