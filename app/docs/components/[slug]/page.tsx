import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import { allDocs } from "@/.contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams({ params }: PageProps) {
  const doc = allDocs.find((doc) => doc.slug === params.slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
  }
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug,
  }))
}

export default async function SlugPage({ params }: PageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <div className="bg-layer-01 p-6 md:p-10">
      <div className="max-w-2xl">
        <h1 className="mb-1 heading-04">{doc.title}</h1>
        <p className="body-compact-02">{doc.description}</p>
        <Mdx code={doc.body.code} />
      </div>
    </div>
  )
}
