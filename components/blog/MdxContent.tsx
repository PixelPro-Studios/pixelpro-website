import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg prose-invert prose-brand max-w-none">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
