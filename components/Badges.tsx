import { Badge, Container } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const BADGES = [
  { pathname: "/calculator/age", label: "나이 계산기" },
  { pathname: "/calculator/pyeong", label: "평 계산기" },
  { pathname: "/calculator/interest", label: "이자 계산기" },
  { pathname: "/calculator/small-business-age", label: "중소기업 취업자 연령" },
  { pathname: "/calculator/year-end", label: "연말 정산 예상 세액" },
] as const;

function Badges() {
  const router = useRouter();

  return (
    <Container md display="flex" justify="center">
      {BADGES.map((badge) => (
        <Link key={badge.pathname} href={badge.pathname}>
          <Badge
            color={router.pathname === badge.pathname ? "primary" : "default"}
          >
            {badge.label}
          </Badge>
        </Link>
      ))}
    </Container>
  );
}

export default Badges;
