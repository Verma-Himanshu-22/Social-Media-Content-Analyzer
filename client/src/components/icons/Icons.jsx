import React from "react";


export const SunIcon = ({ size = 24, color = "currentColor" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="5" />
<line x1="12" y1="1" x2="12" y2="3" />
<line x1="12" y1="21" x2="12" y2="23" />
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
<line x1="1" y1="12" x2="3" y2="12" />
<line x1="21" y1="12" x2="23" y2="12" />
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</svg>
);


export const MoonIcon = ({ size = 24, color = "currentColor" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
</svg>
);


export const UploadIcon = ({ size = 36, color = "currentColor" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
<polyline points="17 8 12 3 7 8" />
<line x1="12" y1="3" x2="12" y2="15" />
</svg>
);


export const CheckIcon = ({ size = 20, color = "currentColor" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
<polyline points="20 6 9 17 4 12" />
</svg>
);