import { PostEngagementChart } from "../components";

const PostEngagementPage = ({ platform }) => {
    return (
        <div className="flex-1 p-4">
            <PostEngagementChart platform={platform} />
        </div>
    );
};

export default PostEngagementPage;
