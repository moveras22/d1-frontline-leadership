import BackToHomeLink from "./BackToHomeLink";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

type InteriorPageNavProps = {
  breadcrumbs: BreadcrumbItem[];
};

export default function InteriorPageNav({ breadcrumbs }: InteriorPageNavProps) {
  return (
    <div className="mb-8">
      <BackToHomeLink />
      <div className="mt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </div>
  );
}
