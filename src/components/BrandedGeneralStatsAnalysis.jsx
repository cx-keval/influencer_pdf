const typeLabels = {
    reels: "Reels",
    feed: "Posts",
    shorts: "Shorts",
    videos: "Videos",
};

const BrandedGeneralStatsAnalysis = ({
    type, // "reels" | "shorts" | "feed" | "videos"
    className = "",
}) => {
    return (
        <div
            className={`rounded-md border ${type !== "feed" ? "w-full" : "w-3/4"} ${className}`}
        >
            <div className="border-b px-4 py-3 font-medium text-slate-600">
                {typeLabels[type]}
            </div>
            <div
                className={`grid py-4 ${type !== "feed" ? "grid-cols-4" : "grid-cols-3"}`}
            >
                {type !== "feed" ? (
                    <div className="space-y-2 border-r px-4 last:border-r-0">
                        <p className="text-sm font-medium text-slate-600">
                            Avg. Views
                        </p>

                        <div className="flex items-center gap-1.5">
                            <span className="text-xl font-semibold">21.5%</span>

                            <span className="rounded-sm bg-green-50 px-2 py-0.5 text-sm text-green-500">
                                Excellent
                            </span>
                        </div>

                        <p className="text-xs text-slate-400">
                            This percentage reflects how successful branded
                            content performed relative to general content.
                        </p>

                        <hr />

                        <p className="text-sm text-slate-400">
                            Detail Breakdown
                        </p>

                        <div className="space-y-2 rounded-md bg-slate-50 p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">
                                    Branded
                                </span>
                                <span className="text-sm font-semibold text-slate-600">
                                    71.86K
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">
                                    General
                                </span>
                                <span className="text-sm font-semibold text-slate-600">
                                    69.45K
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Avg. Likes
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">21.5%</span>

                        <span className="rounded-sm bg-blue-50 px-2 py-0.5 text-sm text-blue-500">
                            Good
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Avg. Comments
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">21.5%</span>

                        <span className="rounded-sm bg-orange-50 px-2 py-0.5 text-sm text-orange-500">
                            Fair
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Engagement Rate
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">1.5%</span>

                        <span className="rounded-sm bg-red-50 px-2 py-0.5 text-sm text-red-500">
                            Poor
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandedGeneralStatsAnalysis;
