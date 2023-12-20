import { useEffect, useState } from "react";

export function NextRs() {
  const members = [
    "박지호",
    "장인선",
    "채영지",
    "김수현",
    "김홍진",
    "유승은",
    "장경화",
    "정다원",
    "차영은",
    "김정우",
    "고은희",
    "박효진",
    "신소현",
    "우민지",
    "최수용",
    "김민형",
    "곽윤설",
    "김동민",
    "김수환",
    "서성운",
    "임민규",
    "조용환",
    "최윤영",
    "강연주",
    "신휘재",
    "유희선",
    "이희재",
    "차경민",
    "황기홍",
    "이보람",
    "이주연",
    "곽형선",
    "김미영",
    "김현종",
    "김채영",
    "박범석",
    "방재규",
    "조하담",
    "이지은",
    "송다슬",
    "이한성",
  ];

  const [randomM, setRandomM] = useState("");
  const [intervalId, setIntervalId] =
    useState<ReturnType<typeof setInterval>>();

  const clearIntervalId = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * members.length);
      const randomMember = members[randomIndex];
      setRandomM(randomMember);
    }, 100);

    setIntervalId(interval);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className={`flex flex-col items-center gap-5`}>
      <h1 className={`text-scale-1200 w-[500px] text-center text-xl`}>
        다음 RS 진행자는?
      </h1>
      <p className={`text-scale-1200 w-[500px] text-center text-4xl`}>
        {randomM}
      </p>
      <button
        className={`text-scale-1200 border p-2 rounded-md`}
        onClick={clearIntervalId}
      >
        누르면 멈춤
      </button>
    </div>
  );
}
