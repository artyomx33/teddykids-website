declare module 'react-audio-player-component' {
  import { FC } from 'react';

  interface AudioPlayerProps {
    /**
     * Path to the audio file
     */
    src: string;
    
    /**
     * Use minimal UI version
     */
    minimal?: boolean;
    
    /**
     * Width of the player in pixels
     */
    width?: number;
    
    /**
     * Height of the track in pixels
     */
    trackHeight?: number;
    
    /**
     * Color of the played portion of the track
     */
    barPlayedColor?: string;
    
    /**
     * Color of the unplayed portion of the track
     */
    barUnplayedColor?: string;
    
    /**
     * Color of the track on hover
     */
    barHoverColor?: string;
    
    /**
     * Duration to skip in seconds when using skip buttons
     */
    skipDuration?: number;
    
    /**
     * Whether to show the loop option
     */
    showLoopOption?: boolean;
    
    /**
     * Whether to show volume control
     */
    showVolumeControl?: boolean;
  }

  export const AudioPlayer: FC<AudioPlayerProps>;
}
