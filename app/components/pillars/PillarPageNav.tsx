import InteriorPageNav from "../InteriorPageNav";

type PillarPageNavProps = {
  pillarLabel: string;
};

export default function PillarPageNav({ pillarLabel }: PillarPageNavProps) {
  return (
    <InteriorPageNav
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "D1 Framework", href: "/free-framework" },
        { label: pillarLabel },
      ]}
    />
  );
}
