export function ShareYourPicture() {
  return (
    <div className={`flex flex-col items-center gap-5`}>
      <p className={`text-scale-1200 w-[600px] text-2xl mb-5`}>
        희망하시는 분들에 한해서 직접 찍은 사진 중 다음과 같은 사진이 있다면
        저에게 Slack DM으로 보내주세요. (콘텐츠를 많이 준비 못했습니다.
        도와주세요 🙇‍♂️)
      </p>
      <ul className={`list-disc`}>
        <li className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
          자랑하고 싶을 정도로 잘 찍었다.
        </li>
        <li className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
          회사 사람들에게 전달하고 싶은 메시지가 담겨있는 사진이다.
        </li>
        <li className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
          회사 사람들에게 전달하고 싶은 메시지를 담을 수 사진이다.
        </li>
        <li className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
          다른 사람들의 반응이 궁금한 사진이다.
        </li>
        <li className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
          이유가 없거나 모르겠지만 공유하고 싶은 사진이다.
        </li>
      </ul>
      <p className={`text-scale-1200 w-[600px] text-2xl leading-loose`}>
        받았던 모든 사진은 행사 완료 후 삭제합니다.
      </p>
    </div>
  );
}
