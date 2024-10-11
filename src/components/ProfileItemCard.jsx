import { CXSocialIcon } from "./CXSocialIcon";

const ProfileItemCard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 rounded-md border p-4 pt-6">
            <div className="relative h-fit w-fit">
                <img
                    src="https://yt3.googleusercontent.com/ytc/AIdro_lISfErzX3mYCJTAcWWzz572I6wZQvr2JWEudZx1A=s480-c-k-c0x00ffffff-no-rj"
                    alt="profile"
                    className="h-[60px] w-[60px] shrink-0 rounded-full"
                />

                <span className="absolute bottom-0 right-0">
                    <CXSocialIcon platform="instagram" className="h-6 w-6" />
                </span>
            </div>

            <div className="text-center">
                <p className="text-sm font-medium text-slate-600">
                    Ashish Chanchlani
                </p>
                <p className="text-xs text-slate-400">@ashishchanchlani</p>
            </div>

            <div className="flex w-full items-center rounded-md bg-slate-50 py-2 text-center">
                <div className="flex-1 px-4">
                    <p className="text-xs text-slate-400">Followers</p>
                    <p className="text-sm font-medium text-slate-600">30M</p>
                </div>
                <div className="flex-1 px-4">
                    <p className="text-xs text-slate-400">Engagement Rate</p>
                    <p className="text-sm font-medium text-slate-600">6.349%</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileItemCard;
