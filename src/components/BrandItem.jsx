const BrandItem = () => {
    return (
        <div className="flex items-center gap-2 rounded-md border p-3">
            <img
                src="https://ik.imagekit.io/culturex/instagram/realdonaldtrump/realdonaldtrump.jpg"
                className="h-[45px] w-[45px] shrink-0 rounded-full border"
                alt="profile"
            />
            <div className="flex-1 overflow-hidden">
                <p className="truncate font-semibold text-slate-600">
                    Ashish Chanchalani
                </p>
                <a
                    href="http://instagram.com/instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-sm text-slate-400 underline"
                >
                    @ashishchanchlani
                </a>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-slate-100 px-4 py-2">
                <span className="text-lg font-medium">12</span>
                <span className="text-sm text-slate-400">Posts</span>
            </div>
        </div>
    );
};

export default BrandItem;
