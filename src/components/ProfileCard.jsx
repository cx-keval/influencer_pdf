import { CXSocialIcon } from "./CXSocialIcon";

const ProfileCard = ({ platform = "instagram" }) => {
    return (
        <div className="space-y-4 rounded-md border p-4">
            <div className="flex items-stretch gap-4">
                <img
                    src="https://ik.imagekit.io/culturex/instagram/realdonaldtrump/realdonaldtrump.jpg"
                    alt="profile"
                    className="w-[150px] rounded-md"
                />

                <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-lg font-medium text-slate-600">
                                Ashish Chanchlani
                            </p>
                            <p className="truncate font-medium text-slate-400">
                                @ashishchanchlani
                            </p>
                        </div>

                        <div className="flex items-center gap-1 rounded-full border px-3 py-1 font-semibold capitalize text-slate-600">
                            <CXSocialIcon platform={platform} />
                            {platform}
                        </div>
                    </div>

                    <div className="flex flex-1 items-stretch gap-4">
                        <div className="flex-1 space-y-1 overflow-hidden rounded-md border p-2">
                            <p className="flex items-center gap-1 text-sm text-slate-400">
                                Email
                            </p>
                            <p className="whitespace-normal break-words text-sm font-medium text-slate-600">
                                Pranjal.pranjalgupta.gupta@gmail.com
                            </p>
                        </div>
                        <div className="flex-1 space-y-1 overflow-hidden rounded-md border p-2">
                            <p className="flex items-center gap-1 text-sm text-slate-400">
                                Phone Number
                            </p>
                            <p className="whitespace-normal break-words text-sm font-medium text-slate-600">
                                9876543210
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-md bg-slate-50 p-4">
                <p className="line-clamp-4 text-sm font-medium text-slate-600">
                    Remember, these are general reasons, and the actual time
                    taken for check clearance might vary based on specific
                    circumstances, bank policies, and any changes in the banking
                    system. Always check with your bank for precise information
                    regarding check clearance times. Remember, these are general
                    reasons, and the actual time taken for check clearance might
                    vary based on specific circumstances, bank policies, and any
                    changes in the banking system. Always check with your bank
                    for precise information regarding check clearance times.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
