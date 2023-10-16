// type AdultOrNotProps = {
//     setIsAdult: (value: boolean) => any
// }

// function AdultOrNot({ setIsAdult }: AdultOrNotProps) : JSX.Element {
//   const yesHandler = () => {
//     setIsAdult(true);
//   };

//   const noHandler = () => {
//     setIsAdult(false);
//   };

//   return (
//     <div>
//       Вам Есть 18?
//       <button onClick={yesHandler}>Да</button>
//       <button onClick={noHandler}>Нет</button>
//     </div>
//   );
// }

// export default AdultOrNot;

//лучше использовать способос с FC (function component)

import { ChangeEvent, FC, MouseEventHandler } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = () => {
    setIsAdult(true);
  };

  const noHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsAdult(false);
    console.log(e.target);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
};

export default AdultOrNot;
