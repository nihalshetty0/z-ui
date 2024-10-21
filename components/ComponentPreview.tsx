import React, { Suspense } from "react";
import dynamic from "next/dynamic";

interface ComponentPreviewProps {
  name: string;
  description?: string;
  className?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  description,
  className,
}) => {
  const DynamicComponent = dynamic(() =>
    import(`@/components/examples/${name}`).then(
      (mod) =>
        mod[
          name
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join("")
        ],
    ),
  );

  return (
    <div className={`component-preview ${className || ""}`}>
      {description && <p>{description}</p>}
      <div className="preview-content">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default ComponentPreview;
