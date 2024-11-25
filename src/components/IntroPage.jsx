import { DotsSVG } from "./SVGs";

const IntroPage = ({ platform = "Instagram" }) => {
    return (
        <section className="mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <div className="flex flex-1">
                <div className="relative flex flex-[3] flex-col justify-center overflow-hidden p-4">
                    <img
                        src="https://res.cloudinary.com/drn8ksu9x/image/upload/v1705059002/influenzer/logo.png"
                        className="absolute left-8 top-8 max-h-[90px] max-w-[200px] object-contain"
                        alt="logo"
                    />

                    <div className="z-10 max-w-lg pl-7">
                        <p className="flex items-center gap-3">
                            <span className="text-slate-400">
                                Influencer Type:
                            </span>
                            <span className="font-semibold uppercase text-slate-600">
                                MEGA
                            </span>
                        </p>

                        <div className="my-6 border-b-2 border-slate-400"></div>

                        <h1 className="min-h-[250px] text-6xl font-bold text-slate-600">
                            Ashish Chanchlani - {platform}
                        </h1>

                        <div className="flex">
                            <div className="flex-1">
                                <p className="text-slate-400">
                                    Report Updated On:
                                </p>
                                <p className="font-medium text-slate-800">
                                    25/05/2024
                                </p>
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-400">
                                    PDF Generated On:
                                </p>
                                <p className="font-medium text-slate-800">
                                    29/05/2024
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[750px] w-[750px] translate-x-[-130px] translate-y-[390px] rounded-full bg-[#F8FAFC]"></div>

                    <DotsSVG className="absolute -left-0 bottom-0 h-[150px] w-auto" />
                </div>

                <div className="flex flex-[2]">
                    <div className="h-full w-28 shadow-[10px_0px_30px_-20px_rgb(0,0,0,0.1)]"></div>
                    <div className="flex h-full w-28 items-center justify-center shadow-[10px_0px_30px_-20px_rgb(0,0,0,0.1)]">
                        <div className="-translate-x-3 rotate-90 text-[90px] font-semibold text-black/5">
                            REPORT
                        </div>
                    </div>
                    <div className="flex h-full w-28 items-center justify-center shadow-[10px_0px_30px_-20px_rgb(0,0,0,0.1)]">
                        <div className="-translate-x-3 rotate-90 text-[90px] font-semibold text-black/5">
                            INFLUENCER
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroPage;
