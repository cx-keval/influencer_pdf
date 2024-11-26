import SectionHeader from "./SectionHeader";
import PostCard from "./PostCard";
import { capitalizeWord } from "../utils";

const RecentContentSection = ({ type }) => {
    return (
        <div className="flex-1">
            <SectionHeader
                title={`Recent ${capitalizeWord(type)}`}
                description={`This section shows latest 4 ${type} posted by the influencer.`}
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default RecentContentSection;
