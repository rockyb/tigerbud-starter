import React from 'react';
import {Path, G, Image} from 'react-native-svg';

export const icons = {
  StoryBook: {
    svg: (
      <G>
        <Path d="M0.726,18.4293 L0.106,1.92089 C0.086,1.37568 0.504,0.91362 1.048,0.87959 L15.09,0.00199 C15.644,-0.03265 16.122,0.38859 16.156,0.94286 C16.158,0.96374 16.158,0.98466 16.158,1.00558 L16.158,18.9945 C16.158,19.5498 15.708,19.9999978 15.153,19.9999978 C15.138,19.9999978 15.123,19.9997 15.108,19.999 L1.685,19.3962 C1.163,19.3727 0.745,18.9522 0.726,18.4293 Z"></Path>
        <Path d="M0.726,18.4293 L0.106,1.92089 C0.086,1.37568 0.504,0.91362 1.048,0.87959 L15.09,0.00199 C15.644,-0.03265 16.122,0.38859 16.156,0.94286 C16.158,0.96374 16.158,0.98466 16.158,1.00558 L16.158,18.9945 C16.158,19.5498 15.708,19.9999978 15.153,19.9999978 C15.138,19.9999978 15.123,19.9997 15.108,19.999 L1.685,19.3962 C1.163,19.3727 0.745,18.9522 0.726,18.4293 Z"></Path>
        <Path
          d="M11.959,2.45832 L12.055,0.15151 L13.983,0 L14.066,2.37893 C14.069,2.46172 14.004,2.53118 13.921,2.53407 C13.886,2.53531 13.851,2.52395 13.823,2.502 L13.08,1.91619 L12.199,2.58406 C12.133,2.63412 12.039,2.62121 11.989,2.5552 C11.968,2.52742 11.957,2.49316 11.959,2.45832 Z"
          fill="#FFFFFF"></Path>
        <Path
          d="M9.493,7.5383 C9.493,7.9295 12.128,7.742 12.482,7.4672 C12.482,4.8031 11.052,3.40317 8.435,3.40317 C5.817,3.40317 4.35,4.8249 4.35,6.9575 C4.35,10.6717 9.363,10.7428 9.363,12.7688 C9.363,13.3374 9.084,13.6751 8.472,13.6751 C7.673,13.6751 7.358,13.2674 7.395,11.8812 C7.395,11.5805 4.35,11.4868 4.258,11.8812 C4.021,15.2404 6.114,16.2094 8.509,16.2094 C10.829,16.2094 12.649,14.9724 12.649,12.7332 C12.649,8.7524 7.562,8.859 7.562,6.8864 C7.562,6.0867 8.156,5.98 8.509,5.98 C8.88,5.98 9.548,6.0455 9.493,7.5383 Z"
          fill="#FFFFFF"></Path>
      </G>
    ),
    viewBox: '0 0 17 20',
  },
  Log: {
    svg: (
      <Path d="M9.5 4L8.1 5.4L10.7 8H0.5V10H10.7L8.1 12.6L9.5 14L14.5 9L9.5 4ZM18.5 16H10.5V18H18.5C19.6 18 20.5 17.1 20.5 16V2C20.5 0.9 19.6 0 18.5 0H10.5V2H18.5V16Z" />
    ),
    viewBox: '0 0 21 18',
  },
  Home: {
    svg: (
      <G>
        <Path d="M.5 4.953L9.389 9.89V20L.5 14.815z" fill="#8E8E93" />
        <Path d="M9.389 9.891V20l8.148-5.185V4.953z" fill="#2C2C2E" />
        <Path d="M.5 4.953L9.389 9.89l8.148-4.938L8.895 0z" fill="#48484A" />
      </G>
    ),
    viewBox: '0 0 18 20',
  },
  HomeActive: {
    svg: (
      <G>
        <Path d="M.5 4.953L9.389 9.89V20L.5 14.815z" fill="#B586F8" />
        <Path d="M9.389 9.891V20l8.148-5.185V4.953z" fill="#4A1E84" />
        <Path d="M.5 4.953L9.389 9.89l8.148-4.938L8.895 0z" fill="#6825AD" />
      </G>
    ),
    viewBox: '0 0 18 20',
  },
};

export default icons;
