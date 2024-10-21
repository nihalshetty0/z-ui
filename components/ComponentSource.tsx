import React from "react";

interface ComponentSourceProps {
  name: string;
}

const ComponentSource: React.FC<ComponentSourceProps> = ({ name }) => (
  <div className="component-source">
    {/* You would implement logic here to fetch and display the source code */}
    <pre>
      <code>{`// Source code for ${name} component`}</code>
    </pre>
  </div>
);

export default ComponentSource;
