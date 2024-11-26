import { IconEye, IconHeart, IconBrandLine } from "@tabler/icons-react";
import { CXSocialIcon } from "./CXSocialIcon";

const PostCard = () => {
    return (
        <div className="flex flex-col gap-2 rounded-lg border p-2">
            <div className="relative flex-1 overflow-hidden rounded-md">
                <img
                    src="https://i.ytimg.com/vi/9lx11dy9J30/hqdefault.jpg"
                    className="z-[1] h-full w-full object-contain"
                    alt="thumbnail"
                />
                <div
                    aria-label="dark-overlay"
                    className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent via-30% to-transparent to-100%"
                />

                <div className="absolute bottom-2 left-2 right-2 z-[10] flex items-center justify-between rounded-md text-xs text-white">
                    <div className="flex items-center gap-1">
                        <span className="item-center flex gap-1 font-medium text-white">
                            <CXSocialIcon
                                platform="instagram"
                                className="h-4 w-4"
                            />
                            Instagram
                        </span>
                    </div>
                    <span className="rounded-full bg-slate-950/50 px-2 font-medium text-white">
                        Reel
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-evenly rounded-md bg-slate-100 py-1 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-0.5">
                    <IconEye className="h-4 w-4" />
                    676.9K
                </span>
                <span className="flex items-center gap-0.5">
                    <IconHeart className="h-4 w-4" />
                    76.1K
                </span>
                <span className="flex items-center gap-0.5">
                    <IconBrandLine className="h-4 w-4" />
                    1679
                </span>
                <span className="flex items-center gap-0.5">
                    <span>E.R.</span>
                    6.86%
                </span>
            </div>
        </div>
    );
};

export default PostCard;
