import { ProgressBar, SectionHeader } from "../components";

const TopHashtagsAndMentions = () => {
    return (
        <div className="flex-1 p-4">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <SectionHeader
                        title="Top Hashtags"
                        description="This section identifies the most frequently used hashtag by the influencer."
                    />

                    <div className="mt-2 grid grid-cols-2 gap-4 rounded-md border p-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <ProgressBar
                                key={i}
                                label="#cr7"
                                value={19.678}
                                className="rounded-md border p-4"
                            />
                        ))}
                    </div>
                </div>
                <div className="col-span-2">
                    <SectionHeader
                        title="Most used mentions"
                        description="This section shows most frequently mentioned accounts by the influencer."
                    />

                    <div className="mt-2 grid grid-cols-2 gap-4 rounded-md border p-4">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-600"
                            >
                                @cristianoronaldo
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHashtagsAndMentions;
