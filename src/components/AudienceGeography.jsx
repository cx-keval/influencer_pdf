import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";

const AudienceGeography = ({ platform }) => {
    return (
        <div>
            <SectionHeader
                title="Audience Geography"
                description="This section provides detailed insights into the geographic locations of the influencer's audience."
                className="mt-4"
            />

            <div
                className={`mt-2 grid gap-4 ${platform === "instagram" ? "grid-cols-3" : "grid-cols-2"}`}
            >
                <div className="space-y-6 rounded-lg border p-4 pb-6">
                    <p className="text-sm font-medium text-slate-600">
                        Top Country
                    </p>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <ProgressBar
                            key={i}
                            label={`Country ${i + 1}`}
                            value={10.88}
                            countryCode="in"
                        />
                    ))}
                </div>

                {platform === "instagram" ? (
                    <div className="space-y-6 rounded-lg border p-4 pb-6">
                        <p className="text-sm font-medium text-slate-600">
                            Top City
                        </p>

                        {Array.from({ length: 5 }).map((_, i) => (
                            <ProgressBar
                                key={i}
                                label={`City ${i + 1}`}
                                value={10.88}
                            />
                        ))}
                    </div>
                ) : null}

                <div className="space-y-6 rounded-lg border p-4 pb-6">
                    <p className="text-sm font-medium text-slate-600">
                        Top Language
                    </p>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <ProgressBar
                            key={i}
                            label={`Language ${i + 1}`}
                            value={10.88}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AudienceGeography;
