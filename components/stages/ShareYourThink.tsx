export function ShareYourThink() {
  return (
    <div className={`flex flex-col items-center gap-5`}>
      <p className={`text-scale-1200 w-[500px] text-2xl mb-5 leading-loose`}>
        책을 보고 들었던 생각 중 나누고 싶은 것이 있나요? 간략해도 좋아요.
        길어도 좋아요.
      </p>
      <p className={`text-scale-1200 w-[500px] text-2xl `}>가령</p>
      <ul className={`list-disc`}>
        <li className={`text-scale-1200 w-[500px] text-2xl leading-loose`}>
          책에 대한 전반적인 생각 또는 감상
        </li>
        <li className={`text-scale-1200 w-[500px] text-2xl leading-loose`}>
          특별히 기억에 남는 부분이 있나요?
        </li>
        <li className={`text-scale-1200 w-[500px] text-2xl leading-loose`}>
          다른 사람의 생각도 들어보고 싶은 부분이 있나요?
        </li>
      </ul>
    </div>
  );
}
