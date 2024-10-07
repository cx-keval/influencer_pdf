const SectionHeader = ({
    title,
    description,
    blueTitle = false,
    className = "",
}) => {
    return (
        <div className={className}>
            <p
                className={`text-lg font-medium ${blueTitle ? "text-blue-500" : ""}`}
            >
                {title}
            </p>
            <p className="text-base font-medium text-slate-400">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
