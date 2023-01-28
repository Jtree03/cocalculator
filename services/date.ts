export function calcuateAge(
  currentDate: Date,
  birthdate: Date,
  fullMode?: boolean
) {
  let age = currentDate.getFullYear() - birthdate.getFullYear();
  const month = currentDate.getMonth() - birthdate.getMonth();
  if (
    (fullMode && month < 0) ||
    (month === 0 && currentDate.getDate() < birthdate.getDate())
  ) {
    age -= 1;
  }
  return age;
}

export const ZODIAC_TABLE = [
  "원숭이",
  "닭",
  "개",
  "돼지",
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
] as const;

export function calcuateZodiac(ADYear: number) {
  const rest = ADYear % 12;
  return ZODIAC_TABLE[rest];
}
