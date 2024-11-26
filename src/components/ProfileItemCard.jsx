import { CXSocialIcon } from "./CXSocialIcon";

const ProfileItemCard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 rounded-md border p-4 pt-6">
            <div className="relative h-fit w-fit">
                <img
                    src="https://ik.imagekit.io/culturex/instagram/realdonaldtrump/realdonaldtrump.jpg"
                    className="h-[60px] w-[60px] shrink-0 rounded-full"
                    alt="profile"
                />

                <span className="absolute bottom-0 right-0">
                    <CXSocialIcon platform="instagram" className="h-6 w-6" />
                </span>
            </div>

            <div className="text-center">
                <p className="text-sm font-semibold text-slate-600">
                    Ashish Chanchlani
                </p>
                <a
                    href="http://instagram.com/instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 underline"
                >
                    @ashishchanchlani
                </a>
            </div>

            <div className="flex w-full items-center rounded-md bg-slate-50 py-2 text-center">
                <div className="flex-1 space-y-1 px-4">
                    <p className="text-xs text-slate-400">Followers</p>
                    <p className="font-semibold text-slate-600">30M</p>
                </div>
                <div className="flex-1 space-y-1 px-4">
                    <p className="text-xs text-slate-400">Engagement Rate</p>
                    <p className="font-semibold text-slate-600">6.349%</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileItemCard;
