export const House = ({ width, color, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "17"}
            height={width || "18"}
            fill="none"
            viewBox="0 0 17 18"
            className={className}
        >
            <g clipPath="url(#clip0_344_797)">
                <path
                    fill={"#000" || color}
                    d="M8.479.75a.656.656 0 00-.385.141L1.876 5.79A3.283 3.283 0 00.625 8.367v8.352c0 .596.497 1.094 1.094 1.094h4.375c.596 0 1.093-.498 1.093-1.094v-4.375c0-.13.09-.219.22-.219h2.187c.129 0 .219.09.219.219v4.375c0 .596.497 1.094 1.093 1.094h4.375c.597 0 1.094-.498 1.094-1.094V8.367a3.283 3.283 0 00-1.251-2.577L8.906.89a.656.656 0 00-.427-.14zM8.5 2.242l5.812 4.58c.475.373.75.942.75 1.545V16.5h-3.937v-4.156c0-.838-.694-1.531-1.531-1.531H7.406c-.838 0-1.531.693-1.531 1.53V16.5H1.937V8.367c0-.603.276-1.172.75-1.546L8.5 2.242z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_344_797">
                    <path fill="#fff" d="M0 0H17V18H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};
