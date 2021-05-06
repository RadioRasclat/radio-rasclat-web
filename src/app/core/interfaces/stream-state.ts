export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined;
  currentTrack: {
    currentTime: number | undefined;
    currentSrc: string;
    currentImage: string;
    currentTitle: string;
    currentUrl: string;
  };
  volume: number | undefined;
  canplay: boolean;
  muted: boolean;
  hidden: boolean;
  live: boolean;
  nextShowName: string | undefined;
  nextShowStart: string | undefined;
  error: boolean;
}
