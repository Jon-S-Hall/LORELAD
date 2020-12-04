import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => (
  <AudioPlayer
    src="/sample2.mp3"
    autoPlay={false}
    onPlay={(e) => console.log("onPlay")}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
    showDownloadProgress={false}
    showJumpControls={false}
    layout={"horizontal-reverse"}
  />
);

export default Player;
