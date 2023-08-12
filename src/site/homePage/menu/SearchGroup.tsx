import React from "react";
import "./SearchGroup.scss";
import Text from "../Text";
import { SEARCH_ART_WORK_CREATOR } from "../TextContent";

export default function GroupSearch(): JSX.Element {
    return (
        <div className="search-group">
            <div className="search">
                <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                        d="M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z"
                        stroke="#9D9D9D"
                        stroke-width="1.79246"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.9248 15.3394L23.0946 22.5092"
                        stroke="#9D9D9D"
                        stroke-width="1.79246"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <Text text={SEARCH_ART_WORK_CREATOR} />
            </div>
            <div className="box">
                <svg
                    className="bg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="349"
                    height="57"
                    viewBox="0 0 349 57"
                    fill="none">
                    <path
                        d="M0 28.5001C0 15.6969 0 9.29526 3.67892 5.08743C4.11644 4.587 4.587 4.11644 5.08743 3.67892C9.29526 0 15.6969 0 28.5001 0H319.953C332.757 0 339.158 0 343.366 3.67892C343.867 4.11644 344.337 4.587 344.775 5.08743C348.454 9.29526 348.454 15.6969 348.454 28.5001C348.454 41.3033 348.454 47.7049 344.775 51.9127C344.337 52.4131 343.867 52.8837 343.366 53.3212C339.158 57.0001 332.757 57.0001 319.953 57.0001H28.5001C15.6969 57.0001 9.29526 57.0001 5.08743 53.3212C4.587 52.8837 4.11644 52.4131 3.67892 51.9127C0 47.7049 0 41.3033 0 28.5001Z"
                        fill="#EDEDED"
                    />
                </svg>
            </div>
        </div>
    );
}
