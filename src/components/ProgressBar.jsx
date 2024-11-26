import { beautify } from "../utils";

const ProgressBar = ({ label, value, countryCode = null, className = "" }) => {
    return (
        <div
            className={`space-y-1.5 text-sm font-medium text-slate-600 ${className}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    {countryCode ? (
                        <img
                            src={`https://flagcdn.com/w320/${countryCode}.png`}
                            className="h-3.5 w-auto shrink-0 object-contain"
                            alt="flag"
                        />
                    ) : null}
                    <p>{label}</p>
                </div>

                <p>{beautify(value)}%</p>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                    className="h-full bg-blue-500"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
