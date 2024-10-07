const PageWrapper = ({ children }) => {
    return (
        <section className="mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <div className="flex min-h-[55px] items-center justify-between border-b px-4">
                <div className="flex flex-1 items-center gap-2">
                    <img
                        src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                        alt="profile"
                        className="h-[35px] w-[35px] rounded-md"
                    />
                    <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium text-slate-600">
                            Ashish Chanchlani - Instagram
                        </p>
                        <p className="truncate text-sm text-slate-400">
                            Mega Influencer | 29/05/2024
                        </p>
                    </div>
                </div>

                <img
                    src="https://res.cloudinary.com/drn8ksu9x/image/upload/v1705059002/influenzer/logo.png"
                    className="max-h-[35px] max-w-[150px] shrink-0 object-contain"
                    alt="logo"
                />
            </div>

            {children}
        </section>
    );
};

export default PageWrapper;
