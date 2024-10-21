import React from "react";
import { allDocs } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "@/components/mdx-components";

export default function Home() {
  console.log("All docs:", allDocs); // Debug: Log all docs
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "docs/button");
  console.log("Found doc:", doc); // Debug: Log the found doc

  if (!doc) {
    return <div>Document not found</div>;
  }

  console.log("Doc body code:", doc.body.code); // Debug: Log the body code

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-3xl font-bold">{doc.title}</h1>
      <p className="mb-6">{doc.description}</p>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
