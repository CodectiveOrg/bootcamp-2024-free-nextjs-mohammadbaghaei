import React, { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        fill="#000000"
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        id="medical-insurance"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
        {...props}
    >
        <path
            id="secondary"
            d="M12,14V10m2,2H10"
            style={{
                fill: "none",
                stroke: "hsl(195.06deg 100% 50%)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <path
            id="primary"
            d="M19,5a1,1,0,0,1,1,1V9.54a12.31,12.31,0,0,1-7.61,11.38,1,1,0,0,1-.78,0A12.31,12.31,0,0,1,4,9.54V6A1,1,0,0,1,5,5a12.6,12.6,0,0,0,7-2A12.6,12.6,0,0,0,19,5Z"
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
    </svg>
);
export default SVGComponent;