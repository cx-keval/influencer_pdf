import { HTMLAttributes, ReactNode, SVGProps } from "react";

const InstagramIcon = ({ style = {}, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            style={style}
            {...rest}
        >
            <mask
                id="mask0_8633_15851"
                style={{ maskType: "luminance" }}
                width="16"
                height="16"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#fff" d="M16 8A8 8 0 100 8a8 8 0 0016 0z"></path>
            </mask>
            <g mask="url(#mask0_8633_15851)">
                <path
                    fill="url(#paint0_radial_8633_15851)"
                    d="M12.25 0h-8.5A3.75 3.75 0 000 3.75v8.5A3.75 3.75 0 003.75 16h8.5A3.75 3.75 0 0016 12.25v-8.5A3.75 3.75 0 0012.25 0z"
                ></path>
                <path
                    fill="url(#paint1_radial_8633_15851)"
                    d="M12.25 0h-8.5A3.75 3.75 0 000 3.75v8.5A3.75 3.75 0 003.75 16h8.5A3.75 3.75 0 0016 12.25v-8.5A3.75 3.75 0 0012.25 0z"
                ></path>
                <path
                    fill="#fff"
                    d="M8 3.34c-1.267 0-1.426.005-1.923.028-.496.023-.834.101-1.13.217a2.279 2.279 0 00-.827.537c-.259.26-.418.519-.538.825-.115.297-.194.636-.216 1.132-.022.497-.028.656-.028 1.922s.005 1.424.028 1.921c.023.496.101.835.217 1.131.119.307.278.567.537.826.26.26.519.419.826.538.296.115.635.194 1.131.216.497.023.656.029 1.922.029s1.424-.006 1.921-.029c.496-.022.835-.1 1.132-.216.306-.12.566-.279.825-.538.26-.26.418-.52.538-.826.115-.296.193-.635.217-1.13.022-.498.028-.656.028-1.922s-.006-1.425-.028-1.922c-.024-.496-.102-.835-.217-1.131a2.287 2.287 0 00-.538-.826 2.277 2.277 0 00-.825-.537c-.297-.116-.636-.194-1.133-.217-.497-.023-.655-.028-1.921-.028h.001zm-.419.84H8c1.245 0 1.392.004 1.884.027.454.02.7.096.865.16.217.085.373.186.536.349.163.163.264.318.348.536.064.164.14.41.16.865.023.491.028.639.028 1.883 0 1.243-.005 1.391-.027 1.882-.021.455-.097.702-.16.866a1.44 1.44 0 01-.35.535 1.444 1.444 0 01-.535.349c-.164.064-.411.14-.865.16-.492.023-.64.027-1.884.027-1.244 0-1.392-.004-1.883-.027-.455-.02-.701-.097-.866-.16a1.445 1.445 0 01-.536-.35 1.443 1.443 0 01-.348-.535c-.064-.164-.14-.41-.161-.865-.022-.491-.027-.639-.027-1.884 0-1.244.005-1.391.027-1.882.02-.455.097-.701.16-.866.085-.217.186-.373.35-.536a1.45 1.45 0 01.535-.348c.165-.064.411-.14.866-.161.43-.02.596-.025 1.465-.026zm2.906.774a.56.56 0 100 1.118.56.56 0 000-1.118zM8 5.607a2.394 2.394 0 100 4.788 2.394 2.394 0 000-4.788zm0 .84a1.554 1.554 0 110 3.108 1.554 1.554 0 010-3.108z"
                ></path>
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_8633_15851"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0 -15.8573 14.7484 0 4.25 17.232)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FD5"></stop>
                    <stop offset="0.1" stopColor="#FD5"></stop>
                    <stop offset="0.5" stopColor="#FF543E"></stop>
                    <stop offset="1" stopColor="#C837AB"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_8633_15851"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(1.39122 6.95038 -28.6496 5.73464 -2.68 1.153)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3771C8"></stop>
                    <stop offset="0.128" stopColor="#3771C8"></stop>
                    <stop offset="1" stopColor="#60F" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
};

const LinkedInIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="#0077B5" rx="8"></rect>
        <path
            fill="#fff"
            d="M11.09 12.313h1.515a.207.207 0 00.207-.207l.001-3.205c0-1.676-.36-2.963-2.315-2.963a2.03 2.03 0 00-1.821.996.017.017 0 01-.031-.008v-.627a.208.208 0 00-.207-.207H7.002a.207.207 0 00-.207.207v5.806a.208.208 0 00.207.208h1.514a.207.207 0 00.207-.208v-2.87c0-.811.154-1.597 1.158-1.597.99 0 1.003.929 1.003 1.65v2.818a.208.208 0 00.207.207zM3.5 4.121c0 .615.505 1.12 1.12 1.12.613 0 1.118-.505 1.118-1.12C5.738 3.506 5.233 3 4.619 3S3.5 3.506 3.5 4.121zm.36 8.192h1.516a.207.207 0 00.207-.207V6.299a.208.208 0 00-.207-.207H3.86a.207.207 0 00-.207.207v5.807a.208.208 0 00.207.207z"
        ></path>
    </svg>
);

const TiktokIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="#000" rx="8"></rect>
        <g clipPath="url(#clip0_8633_15837)">
            <path
                fill="#FF004F"
                d="M9.994 6.697c.6.43 1.336.682 2.13.682V5.85c-.15 0-.3-.016-.447-.047v1.203c-.794 0-1.53-.253-2.13-.681v3.117a2.825 2.825 0 01-4.399 2.347 2.825 2.825 0 004.846-1.974V6.696zm.552-1.54a2.129 2.129 0 01-.552-1.248v-.196H9.57a2.14 2.14 0 00.976 1.443zm-4.41 5.436a1.292 1.292 0 011.42-2.013V7.018a2.85 2.85 0 00-.447-.026v1.216a1.294 1.294 0 00-1.685 1.23c0 .505.29.942.711 1.155z"
            ></path>
            <path
                fill="#fff"
                d="M9.547 6.325c.6.43 1.336.682 2.13.682V5.804a2.139 2.139 0 01-1.13-.648 2.14 2.14 0 01-.976-1.443H8.457v6.102a1.292 1.292 0 01-2.321.778 1.292 1.292 0 01.974-2.385V6.992a2.825 2.825 0 00-1.961 4.798 2.825 2.825 0 004.398-2.346V6.324z"
            ></path>
            <path
                fill="#00F2EA"
                d="M11.678 5.803v-.325c-.4 0-.792-.111-1.131-.323.3.329.695.555 1.13.648M9.572 3.712a2.18 2.18 0 01-.024-.176V3.34H8.01v6.102a1.292 1.292 0 01-1.874 1.15 1.292 1.292 0 002.321-.778V3.712h1.114zM7.11 6.99v-.346a2.825 2.825 0 00-1.96 5.144A2.825 2.825 0 017.11 6.99z"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_8633_15837">
                <path
                    fill="#fff"
                    d="M0 0H8.229V9.322H0z"
                    transform="translate(3.896 3.34)"
                ></path>
            </clipPath>
        </defs>
    </svg>
);

const XIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="#000" rx="8"></rect>
        <g clipPath="url(#clip0_8633_15867)">
            <path
                fill="#fff"
                d="M10.328 4.346h1.24l-2.71 3.097 3.189 4.215H9.55L7.595 9.102l-2.237 2.556H4.116l2.9-3.313-3.059-4h2.56l1.767 2.337 2.044-2.336zm-.435 6.57h.687L6.143 5.049h-.737l4.487 5.867z"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_8633_15867">
                <path
                    fill="#fff"
                    d="M0 0H9V9H0z"
                    transform="translate(3.502 3.5)"
                ></path>
            </clipPath>
        </defs>
    </svg>
);

const YouTubeIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="red" rx="8"></rect>
        <path
            fill="#fff"
            d="M8.113 4.313c.249 0 .871.007 1.533.034l.235.01c.666.031 1.332.085 1.662.177.44.124.787.485.904.942.186.728.21 2.145.212 2.489V8.117c-.003.343-.026 1.762-.212 2.488a1.31 1.31 0 01-.904.943c-.33.092-.996.146-1.662.177l-.235.01c-.662.027-1.284.033-1.533.034H7.884c-.526-.002-2.73-.026-3.43-.221a1.31 1.31 0 01-.904-.943c-.186-.727-.21-2.145-.212-2.488v-.152c.003-.344.026-1.762.212-2.489.119-.459.465-.82.904-.942.7-.195 2.904-.219 3.43-.221h.229zM7.066 6.41v3.263L9.863 8.04 7.066 6.41z"
        ></path>
    </svg>
);

const FacebookIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <path
            fill="#1977F3"
            fillRule="evenodd"
            d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.718V8H6.75V6.237c0-2.005 1.195-3.113 3.022-3.113a12.3 12.3 0 011.79.157v1.968h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.218l-.354 2.314H9.25v5.59A8 8 0 0016 8z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#FEFEFE"
            fillRule="evenodd"
            d="M11.114 10.314L11.47 8H9.25V6.5c0-.633.31-1.25 1.304-1.25h1.01V3.28s-.916-.156-1.792-.156c-1.827 0-3.021 1.107-3.021 3.113V8H4.719v2.313H6.75v5.59a8.046 8.046 0 002.5 0v-5.59h1.864z"
            clipRule="evenodd"
        ></path>
    </svg>
);

const LinktreeIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="#43E660" rx="8"></rect>
        <g clipPath="url(#clip0_8633_15875)">
            <path
                fill="#000"
                d="M4.02 6.308h2.42l-1.73-1.64.95-.96 1.64 1.67v-2.38h1.42v2.38l1.64-1.67.95.96-1.73 1.63H12v1.35H9.57l1.73 1.67-.95.94L8 7.908l-2.35 2.36-.95-.95 1.73-1.67H4v-1.34h.02zm3.29 3.27h1.42v3.2H7.31v-3.2z"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_8633_15875">
                <path
                    fill="#fff"
                    d="M0 0H8V9.77H0z"
                    transform="translate(4 3)"
                ></path>
            </clipPath>
        </defs>
    </svg>
);

const PinterestIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <path fill="#fff" d="M16 8A8 8 0 110 8a8 8 0 0116 0z"></path>
        <path
            fill="#E60023"
            d="M8 0a8 8 0 00-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977S5.811 8.7 5.811 7.99c0-1.112.645-1.942 1.448-1.942.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.376-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.738 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 108 0z"
        ></path>
    </svg>
);

const SkypeIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <path
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            fill="#00AFF0"
        />
        <path
            d="M12.798 8.75672C12.8375 8.50972 12.8577 8.25697 12.8577 7.99847C12.8577 5.31397 10.6825 3.13897 7.99847 3.13897C7.74022 3.13897 7.48722 3.15972 7.23997 3.19872C6.79222 2.92197 6.26422 2.76172 5.69797 2.76172C4.07647 2.76172 2.76172 4.07622 2.76172 5.69872C2.76172 6.26447 2.92146 6.79197 3.19846 7.24097C3.16046 7.48872 3.13947 7.74047 3.13947 7.99872C3.13947 10.683 5.31446 12.858 7.99796 12.858C8.25596 12.858 8.50921 12.838 8.75646 12.7985C9.20471 13.0747 9.73271 13.2355 10.2987 13.2355C11.9205 13.2355 13.2352 11.9202 13.2352 10.2992C13.2355 9.73322 13.0755 9.20497 12.798 8.75672ZM10.3057 10.2087C10.1002 10.505 9.79847 10.7357 9.40347 10.9017C9.00797 11.0685 8.54072 11.1517 8.00097 11.1517C7.35447 11.1517 6.81922 11.0387 6.39647 10.8095C6.09647 10.646 5.85296 10.427 5.66596 10.1527C5.47771 9.87872 5.38297 9.61047 5.38297 9.34847C5.38297 9.19497 5.44196 9.06047 5.55621 8.95072C5.67221 8.84097 5.82122 8.78597 5.99747 8.78597C6.14172 8.78597 6.26497 8.82897 6.36622 8.91522C6.46597 9.00122 6.55022 9.12572 6.61847 9.29097C6.70097 9.48247 6.79097 9.64197 6.88547 9.76947C6.97997 9.89572 7.11297 10.0007 7.28497 10.083C7.45547 10.1655 7.68222 10.2065 7.96597 10.2065C8.35422 10.2065 8.66822 10.123 8.90797 9.95672C9.14947 9.78997 9.26521 9.58672 9.26521 9.34047C9.26521 9.14422 9.20272 8.98872 9.07522 8.86797C8.94547 8.74447 8.77822 8.65072 8.57097 8.58547C8.36297 8.51922 8.08372 8.44922 7.73347 8.37572C7.26322 8.27322 6.87022 8.15397 6.55147 8.01647C6.23297 7.87897 5.97872 7.69097 5.79072 7.45272C5.60197 7.21297 5.50822 6.91447 5.50822 6.56122C5.50822 6.22422 5.60772 5.92222 5.80572 5.66047C6.00497 5.39747 6.29222 5.19572 6.66672 5.05597C7.04022 4.91572 7.47996 4.84547 7.98421 4.84547C8.38621 4.84547 8.73521 4.89197 9.03021 4.98472C9.32396 5.07822 9.56947 5.20172 9.76472 5.35622C9.95972 5.51072 10.1035 5.67322 10.1937 5.84397C10.2847 6.01497 10.3302 6.18272 10.3302 6.34547C10.3302 6.49772 10.2715 6.63547 10.1565 6.75597C10.0417 6.87722 9.89546 6.93847 9.72446 6.93772C9.56996 6.93772 9.44897 6.90247 9.36472 6.82722C9.28272 6.75372 9.19697 6.63797 9.10397 6.47572C8.98597 6.25022 8.84571 6.07422 8.68221 5.94797C8.52246 5.82472 8.25972 5.75997 7.89422 5.76097C7.55522 5.76097 7.28497 5.83022 7.08047 5.96572C6.87472 6.10297 6.77622 6.26222 6.77572 6.44922C6.77622 6.56647 6.80997 6.66522 6.87772 6.74922C6.94647 6.83472 7.04246 6.90822 7.16521 6.97097C7.28846 7.03372 7.41347 7.08247 7.53947 7.11797C7.66647 7.15372 7.87797 7.20572 8.17097 7.27497C8.53847 7.35472 8.87271 7.44347 9.17271 7.53972C9.47246 7.63672 9.72747 7.75397 9.93847 7.89347C10.1512 8.03222 10.318 8.20897 10.4365 8.42372C10.556 8.63797 10.615 8.89997 10.615 9.20822C10.6147 9.57922 10.5115 9.91297 10.3057 10.2087Z"
            fill="white"
        />
    </svg>
);

const TumblrIcon = ({ style = {}, ...rest }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" rx="8" fill="#2D4056" />
        <path
            d="M11 12.2972V10.7327C10.4934 11.0719 10.0004 11.2401 9.52177 11.2401C9.2961 11.2401 9.04392 11.1689 8.76145 11.0303C8.59258 10.9159 8.49337 10.7902 8.46384 10.6494C8.38054 10.4797 8.32904 10.1132 8.32904 9.54828V7.05604H10.6009V5.54146H8.32904V3H6.98713C6.87429 3.5922 6.76145 4.01325 6.64786 4.26694C6.50852 4.57743 6.28285 4.85914 5.97312 5.11208C5.68559 5.35385 5.35561 5.54003 5 5.66111V7.05604H6.05718V10.4797C6.05718 10.8735 6.11246 11.2098 6.22605 11.4922C6.31011 11.7179 6.47899 11.9428 6.73419 12.1685C6.93033 12.3669 7.21204 12.535 7.57857 12.6759C8.02916 12.7895 8.42219 12.8448 8.76145 12.8448C9.15524 12.8448 9.52177 12.8023 9.85952 12.7183C10.2575 12.632 10.6414 12.4902 11 12.2972Z"
            fill="white"
        />
    </svg>
);

const TwitchIcon = ({ style = {}, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...rest}
        style={style}
    >
        <rect width="16" height="16" fill="#9146FF" rx="8"></rect>
        <mask
            id="mask0_8633_16144"
            style={{ maskType: "luminance" }}
            width="8"
            height="11"
            x="4"
            y="3"
            maskUnits="userSpaceOnUse"
        >
            <path fill="#fff" d="M12 3.998H4v9.333h8V3.998z"></path>
        </mask>
        <g mask="url(#mask0_8633_16144)">
            <path
                fill="#9146FF"
                d="M11.333 8.329L10 9.662H8.667L7.5 10.83V9.662H6v-5h5.333V8.33z"
            ></path>
            <path
                fill="#fff"
                d="M5.667 3.998L4 5.665v6h2v1.666l1.667-1.666H9l3-3V3.998H5.667zm5.666 4.333L10 9.665H8.667L7.5 10.83V9.665H6v-5h5.333V8.33z"
            ></path>
            <path
                fill="#fff"
                d="M10.33 5.834h-.666v2h.667v-2zM8.503 5.834h-.667v2h.667v-2z"
            ></path>
        </g>
    </svg>
);

const SnapchatIcon = ({ style = {}, ...rest }) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        style={style}
    >
        <g clipPath="url(#clip0_8633_17903)">
            <path
                d="M13.4506 -3.99478e-07C14.8584 -3.99478e-07 16 1.14141 16 2.54965V13.4506C16 14.8584 14.8584 16 13.4506 16H2.54965C1.14165 16 0 14.8584 0 13.4506V2.54965C0 1.14141 1.14165 -3.99478e-07 2.54965 -3.99478e-07H13.4506Z"
                fill="#FFFC00"
            />
            <path
                d="M13.3956 10.7432C13.3485 10.5872 13.1228 10.4772 13.1228 10.4772C13.1015 10.4659 13.0824 10.4558 13.0667 10.448C12.6906 10.2661 12.3571 10.0472 12.0765 9.79904C11.8508 9.5992 11.6577 9.37915 11.5027 9.14563C11.313 8.86046 11.2243 8.62245 11.1861 8.49334C11.1648 8.40913 11.1682 8.37545 11.1861 8.33167C11.2007 8.29462 11.2445 8.25981 11.2647 8.24297C11.3916 8.15316 11.5959 8.02068 11.7217 7.93984C11.8306 7.86911 11.9238 7.80849 11.9788 7.77032C12.155 7.64682 12.2763 7.52108 12.347 7.38523C12.4391 7.21009 12.4503 7.01698 12.3785 6.82725C12.2819 6.57127 12.0428 6.41858 11.7385 6.41858C11.6712 6.41858 11.6015 6.42644 11.5319 6.44104C11.3579 6.47921 11.1929 6.54096 11.0548 6.59485C11.0447 6.59934 11.0335 6.59148 11.0346 6.58025C11.0492 6.23783 11.066 5.77752 11.0278 5.34079C10.9942 4.9456 10.9122 4.61215 10.7797 4.32137C10.6461 4.02947 10.4721 3.81391 10.3363 3.65785C10.2071 3.50966 9.97924 3.29073 9.63569 3.09426C9.15293 2.81807 8.60281 2.67773 8.00104 2.67773C7.40039 2.67773 6.85139 2.81807 6.36751 3.09426C6.00375 3.30196 5.77135 3.5366 5.66582 3.65785C5.52997 3.81391 5.35595 4.02947 5.22235 4.32137C5.08875 4.61215 5.00791 4.94447 4.97423 5.34079C4.93606 5.77976 4.95178 6.20302 4.96749 6.58025C4.96749 6.59148 4.95739 6.59934 4.94616 6.59485C4.80807 6.54096 4.64303 6.47921 4.46901 6.44104C4.40053 6.42644 4.33092 6.41858 4.26244 6.41858C3.95931 6.41858 3.72017 6.57127 3.6225 6.82725C3.55064 7.01698 3.56187 7.21009 3.65393 7.38523C3.72578 7.52108 3.84591 7.64682 4.02218 7.77032C4.07607 7.80849 4.17038 7.86911 4.27928 7.93984C4.40165 8.01956 4.60037 8.14867 4.72836 8.23736C4.74408 8.24859 4.79797 8.28901 4.81481 8.33167C4.83277 8.37658 4.83614 8.41026 4.81256 8.50007C4.77327 8.63031 4.68457 8.86607 4.4982 9.14563C4.34327 9.38027 4.15017 9.5992 3.9245 9.79904C3.64383 10.0472 3.31038 10.2661 2.93428 10.448C2.91632 10.4569 2.89498 10.467 2.87253 10.4805C2.87253 10.4805 2.64799 10.595 2.60533 10.7432C2.54246 10.9622 2.70974 11.1676 2.87927 11.2776C3.1577 11.4573 3.49675 11.5538 3.69323 11.6066C3.74824 11.6212 3.79764 11.6347 3.84255 11.6481C3.87061 11.6571 3.94134 11.6841 3.97166 11.7234C4.00983 11.7728 4.01432 11.8334 4.02779 11.9019C4.04912 12.0175 4.0974 12.1601 4.23998 12.2589C4.39716 12.3667 4.59588 12.3745 4.84849 12.3846C5.11232 12.3947 5.44015 12.4071 5.81626 12.5317C5.99028 12.589 6.14858 12.6866 6.33046 12.7989C6.71218 13.0335 7.18708 13.3255 7.99767 13.3255C8.80938 13.3255 9.28766 13.0324 9.67162 12.7967C9.8535 12.6855 10.0096 12.589 10.1802 12.5328C10.5563 12.4082 10.8841 12.3959 11.148 12.3857C11.4006 12.3756 11.5993 12.3689 11.7565 12.26C11.9092 12.1545 11.953 11.9973 11.9732 11.8794C11.9844 11.821 11.9911 11.7683 12.0248 11.7256C12.054 11.6885 12.1191 11.6627 12.1494 11.6526C12.1955 11.638 12.2471 11.6246 12.3044 11.6088C12.5008 11.5561 12.7478 11.4943 13.0476 11.3248C13.4091 11.1193 13.4338 10.8679 13.3956 10.7432Z"
                fill="white"
            />
            <path
                d="M13.7065 10.6229C13.6268 10.4051 13.4741 10.2894 13.3012 10.1929C13.2686 10.1738 13.2383 10.1581 13.2136 10.1468C13.162 10.1199 13.1092 10.0941 13.0564 10.0671C12.5164 9.78083 12.0943 9.41932 11.8024 8.99157C11.7036 8.84674 11.6351 8.71651 11.5868 8.60985C11.5621 8.538 11.5632 8.49758 11.5812 8.46053C11.5947 8.43246 11.6306 8.40327 11.6508 8.38868C11.744 8.32693 11.8394 8.26518 11.9045 8.22364C12.0202 8.14842 12.1122 8.08891 12.1706 8.0485C12.3929 7.89356 12.5478 7.72853 12.6444 7.5444C12.7814 7.28506 12.7982 6.98867 12.6927 6.71023C12.5467 6.32402 12.1807 6.08377 11.7384 6.08377C11.6463 6.08377 11.5531 6.09387 11.4611 6.11408C11.4364 6.11969 11.4128 6.12531 11.3892 6.13092C11.3937 5.86821 11.387 5.58753 11.3634 5.31359C11.2803 4.34807 10.9424 3.84173 10.5899 3.43868C10.4428 3.27027 10.1868 3.0244 9.80284 2.80435C9.26731 2.49673 8.66105 2.3418 7.99978 2.3418C7.34075 2.3418 6.73449 2.49673 6.19896 2.80323C5.81275 3.02328 5.55677 3.27027 5.41082 3.43756C5.05829 3.84061 4.72036 4.34694 4.63728 5.31247C4.6137 5.58641 4.60809 5.86708 4.61146 6.1298C4.58788 6.12418 4.56318 6.11857 4.5396 6.11296C4.44754 6.09275 4.35324 6.08264 4.2623 6.08264C3.81995 6.08264 3.45395 6.3229 3.308 6.70911C3.20246 6.98754 3.21931 7.28394 3.35628 7.54328C3.45283 7.7274 3.60888 7.89244 3.83006 8.04737C3.88956 8.08891 3.9805 8.14842 4.09614 8.22252C4.15901 8.26293 4.24995 8.32244 4.33976 8.38194C4.35324 8.39092 4.40151 8.42685 4.41835 8.46053C4.43744 8.4987 4.43744 8.54024 4.40937 8.61658C4.36222 8.721 4.29373 8.84898 4.19718 8.99044C3.91089 9.40921 3.5011 9.76399 2.97905 10.0469C2.70174 10.194 2.41433 10.2917 2.29308 10.6217C2.20101 10.871 2.26164 11.155 2.49404 11.3942C2.57038 11.4761 2.66694 11.5491 2.78819 11.6164C3.07335 11.7736 3.31586 11.8511 3.50672 11.9039C3.5404 11.914 3.61786 11.9387 3.65155 11.969C3.73687 12.0431 3.72452 12.1553 3.83791 12.3193C3.9064 12.4214 3.98499 12.491 4.05011 12.5359C4.287 12.6999 4.5542 12.71 4.83712 12.7212C5.09197 12.7313 5.38163 12.7425 5.71171 12.8514C5.84868 12.8963 5.99126 12.9839 6.15517 13.0849C6.55037 13.3286 7.09263 13.6609 7.99865 13.6609C8.9058 13.6609 9.45031 13.3263 9.84887 13.0827C10.0128 12.9828 10.1542 12.8952 10.2867 12.8514C10.6168 12.7425 10.9065 12.7313 11.1613 12.7212C11.4442 12.71 11.7103 12.6999 11.9483 12.5359C12.0224 12.4843 12.1167 12.4001 12.1908 12.2721C12.2717 12.134 12.2705 12.0363 12.3469 11.9701C12.3783 11.9432 12.4468 11.9196 12.4839 11.9083C12.6758 11.8556 12.9217 11.7781 13.2125 11.6176C13.3416 11.5468 13.4415 11.4694 13.5212 11.3807C13.5224 11.3796 13.5235 11.3784 13.5246 11.3773C13.7413 11.1415 13.7963 10.8665 13.7065 10.6229ZM12.9015 11.0551C12.4098 11.3268 12.083 11.2976 11.8293 11.4604C11.6138 11.5996 11.7406 11.8994 11.5846 12.0071C11.3915 12.1407 10.8223 11.9982 10.0869 12.2407C9.48062 12.4416 9.09329 13.0176 8.0009 13.0176C6.90626 13.0176 6.53016 12.4439 5.91492 12.2407C5.17954 11.9982 4.60921 12.1407 4.41723 12.0071C4.26117 11.8994 4.38804 11.5996 4.17248 11.4604C3.91875 11.2965 3.59204 11.3257 3.1003 11.0551C2.78706 10.8822 2.96445 10.7755 3.06886 10.725C4.84947 9.86391 5.13239 8.53238 5.14586 8.43246C5.16158 8.31345 5.17842 8.21915 5.04707 8.09677C4.9202 7.97889 4.35548 7.62973 4.19943 7.52083C3.94008 7.34007 3.82669 7.15932 3.91089 6.93702C3.96927 6.78321 4.11298 6.72595 4.26454 6.72595C4.3117 6.72595 4.35997 6.73157 4.406 6.74167C4.69005 6.80342 4.96623 6.946 5.12566 6.98417C5.14811 6.98979 5.1672 6.99203 5.18404 6.99203C5.26936 6.99203 5.29855 6.94937 5.29294 6.8517C5.27497 6.54071 5.23007 5.93445 5.27947 5.36748C5.34683 4.58833 5.59831 4.20212 5.89695 3.85969C6.04066 3.69578 6.71428 2.98398 8.00202 2.98398C9.29313 2.98398 9.96338 3.69578 10.1071 3.85969C10.4057 4.20099 10.6572 4.5872 10.7246 5.36748C10.774 5.93445 10.7313 6.54071 10.7111 6.8517C10.7044 6.95386 10.7358 6.99203 10.82 6.99203C10.8368 6.99203 10.8571 6.98979 10.8784 6.98417C11.0378 6.946 11.314 6.80342 11.598 6.74167C11.6441 6.73157 11.6923 6.72595 11.7395 6.72595C11.8911 6.72595 12.0348 6.78433 12.0932 6.93702C12.1774 7.15932 12.0628 7.34007 11.8046 7.52083C11.6486 7.62973 11.0838 7.97889 10.957 8.09677C10.8256 8.21802 10.8425 8.31233 10.8582 8.43246C10.8705 8.53238 11.1546 9.86391 12.9352 10.725C13.0362 10.7755 13.2147 10.8822 12.9015 11.0551Z"
                fill="black"
            />
        </g>
        <defs>
            <clipPath id="clip0_8633_17903">
                <rect width={16} height={16} rx={8} fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const EmailIcon = ({ style = {}, ...rest }) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        style={style}
    >
        <rect width={16} height={16} rx={8} fill="#01B9F1" />
        <path
            d="M12.5807 5.95622V10.2943C12.5807 10.6451 12.4467 10.9825 12.2061 11.2377C11.9655 11.4929 11.6365 11.6465 11.2864 11.6671L11.2057 11.6693H4.78906C4.43834 11.6694 4.10087 11.5354 3.84569 11.2948C3.59052 11.0541 3.43693 10.7251 3.41635 10.375L3.41406 10.2943V5.95622L7.74302 8.84234L7.79619 8.87259C7.85884 8.90321 7.92766 8.91912 7.9974 8.91912C8.06713 8.91912 8.13595 8.90321 8.1986 8.87259L8.25177 8.84234L12.5807 5.95622Z"
            fill="white"
        />
        <path
            d="M11.2059 4.33594C11.7009 4.33594 12.1349 4.59719 12.3769 4.98998L7.99754 7.90956L3.61816 4.98998C3.73308 4.80333 3.89097 4.64687 4.07866 4.53365C4.26634 4.42044 4.47838 4.35375 4.69708 4.33915L4.78921 4.33594H11.2059Z"
            fill="white"
        />
    </svg>
);

export const CXSocialIcon = ({
    platform,
    isGroup = false,
    groupGap = 15,
    style,
    ...rest
}) => {
    const groupStyles = {
        marginLeft: `-${groupGap}px`,
        borderRadius: "50vw",
        border: "2px solid #fff",
        transition: "all 100ms ease-out",
    };
    style = style || {};
    const SVGstyle = { ...style, ...(isGroup ? groupStyles : {}) };

    switch (platform) {
        case "instagram":
            return <InstagramIcon style={SVGstyle} {...rest} />;
        case "youtube":
            return <YouTubeIcon style={SVGstyle} {...rest} />;
        case "tiktok":
            return <TiktokIcon style={SVGstyle} {...rest} />;
        case "facebook":
            return <FacebookIcon style={SVGstyle} {...rest} />;
        case "twitter":
            return <XIcon style={SVGstyle} {...rest} />;
        case "x":
            return <XIcon style={SVGstyle} {...rest} />;
        case "linkedin":
            return <LinkedInIcon style={SVGstyle} {...rest} />;
        case "pinterest":
            return <PinterestIcon style={SVGstyle} {...rest} />;
        case "tumblr":
            return <TumblrIcon style={SVGstyle} {...rest} />;
        case "twitch":
            return <TwitchIcon style={SVGstyle} {...rest} />;
        case "snapchat":
            return <SnapchatIcon style={SVGstyle} {...rest} />;
        case "skype":
            return <SkypeIcon style={SVGstyle} {...rest} />;
        case "linktree":
            return <LinktreeIcon style={SVGstyle} {...rest} />;
        case "email":
            return <EmailIcon style={SVGstyle} {...rest} />;
        default:
            return null;
    }
};

export const CXSocialIconGroup = ({ children, className = "", ...rest }) => (
    <div className={`flex items-center ${className}`} {...rest}>
        {children}
    </div>
);
