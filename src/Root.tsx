import {Composition} from "remotion";
import {Video, FPS, totalFrames} from "./Video";
export const RemotionRoot = () => (
  <Composition id="Video" component={Video}
    durationInFrames={totalFrames()} fps={FPS} width={1080} height={1920} />
);