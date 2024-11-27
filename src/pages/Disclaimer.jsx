const DisclaimerPoints = [
    {
        title: "Accuracy of Information",
        subTitle:
            "We have made every effort to ensure the accuracy and reliability of the data presented in this Report. However, we cannot guarantee the accuracy, completeness, or timeliness of the information provided, as it relies on publicly accessible data sources, which may change over time.",
    },
    {
        title: "Limited Scope",
        subTitle:
            "This Report is not exhaustive and may not cover all aspects of the influencer's online presence. It is important to recognize that social media and online statistics can fluctuate frequently, and the data presented here may not reflect real-time information.",
    },
    {
        title: "Third-Party Sources",
        subTitle:
            "The information in this Report has been collected from various third-party sources, including social media platforms, public databases, and other publicly accessible online resources. We do not endorse or take responsibility for the content, accuracy, or reliability of these sources.",
    },
    {
        title: "No Endorsement",
        subTitle:
            "The inclusion of any influencer in this Report does not imply an endorsement, partnership, or affiliation with the influencer or their brand. This Report is purely informative and should not be interpreted as an endorsement of any kind.",
    },
    {
        title: "Not Professional Advice",
        subTitle:
            "This Report is not intended to provide professional advice, recommendations, or endorsements. Users should exercise their judgment and discretion when relying on the information presented in this Report for any decision-making purposes.",
    },
    {
        title: "Privacy Considerations",
        subTitle:
            "We have made every effort to respect the privacy of the influencer and adhere to applicable privacy laws and regulations. Any personal information included in this Report is either publicly available or has been anonymized to the best of our ability.",
    },
    {
        title: "No Liability",
        subTitle:
            "We disclaim any liability for any loss, damage, or inconvenience that may arise from the use of this Report or the reliance on the information contained herein. Users are encouraged to conduct their own research and due diligence.",
    },
    {
        title: "Modifications",
        subTitle:
            "We reserve the right to update or modify this Report at any time without prior notice. Users are encouraged to review the most current version of the Report.",
    },
    {
        title: "Consultation with Legal Professionals",
        subTitle:
            "If you have legal concerns or questions about the use of this Report, we recommend consulting with legal professionals or experts in the field to ensure compliance with applicable laws and regulations.",
    },
];

const Disclaimer = () => (
    <div className="flex-1 p-5">
        <p className="font-medium text-slate-600">Disclaimer</p>
        <p className="text-slate-400">
            This section explains the methodology used in the campaign analysis
            and defines key terms.
        </p>

        <div className="mt-4 rounded-md bg-slate-100 p-5">
            <p className="text-sm text-slate-400">
                This Influencer Insight Report (the "Report") has been prepared
                for informational purposes only and is based on publicly
                available data concerning the influencer in question, including
                their statistics, numbers, and other relevant details. The
                information contained in this Report is intended to provide
                insights and analysis on the influencer's online presence and
                activities.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
                {DisclaimerPoints.map(({ title, subTitle }) => (
                    <li key={title}>
                        <span className="inline text-sm font-medium text-slate-600">
                            {title}
                        </span>
                        {": "}
                        <span className="inline text-sm text-slate-400">
                            {subTitle}
                        </span>
                    </li>
                ))}
                <li className="text-sm font-medium text-slate-600">
                    By accessing and using this Report, you acknowledge that you
                    have read, understood, and agreed to the terms and
                    disclaimers outlined herein.
                </li>
            </ul>
        </div>
    </div>
);

export default Disclaimer;
