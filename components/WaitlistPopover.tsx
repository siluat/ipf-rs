import { FC, memo } from "react";
// import { useTheme } from "../lib/ThemeProvider";
import { Welcome } from "./stages/Welcome";
import { MoodMeter } from "./stages/MoodMeter";
import { KimrikaToon } from "./stages/KimrikaToon";
import { Prolog } from "./stages/Prolog";
import { Senior } from "./stages/Senior";
import { NextRs } from "./stages/NextRs";
import { PickRandomMember } from "./stages/PickRandomMember";
import { ShareYourThink } from "./stages/ShareYourThink";
import { ShareYourPicture } from "./stages/ShareYourPicture";

interface Props {
  stage: string;
}

const WaitlistPopover: FC<Props> = ({ stage }) => {
  // const { isDarkMode } = useTheme();

  return (
    <div
      className={`bg-scale-200 border border-scale-500 dark:border-scale-300 p-6 rounded-md w-full space-y-8 mt-12 transition-all duration-500 overflow-hidden shadow-2xl dark:shadow-lg`}
      style={{ maxHeight: "calc(100vh - 150px)", overflow: "auto" }}
    >
      {stage === "welcome" && <Welcome />}
      {stage === "mood-meter" && <MoodMeter />}
      {stage === "rika" && <KimrikaToon />}
      {stage === "prolog" && <Prolog />}
      {stage === "senior" && <Senior />}
      {stage === "next-rs" && <NextRs />}
      {stage === "random" && <PickRandomMember />}
      {stage === "share" && <ShareYourThink />}
      {stage === "share-picture" && <ShareYourPicture />}
    </div>
  );
};

export default memo(WaitlistPopover);
