import ArticleCard from "@/components/ArticleCard";
import EditorPicksRail from "@/components/Home/EditorPicksRail";
import { getEditorPicks } from "@/lib/api/news";

export default async function EditorPicks() {
  const editorPicks = await getEditorPicks();

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:px-12 md:py-12 lg:px-30">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-6 lg:px-6">
          <div className="flex items-center gap-3">
            <h2 className="shrink-0 font-serif text-2xl leading-8 font-bold tracking-[-0.03em] text-foreground">
              Editor&apos;s Picks
            </h2>
            <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)]" />
          </div>

          {editorPicks.length === 0 ? (
            <div className="rounded-lg border border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] px-6 py-8 text-sm leading-6 text-header-muted">
              No editor&apos;s picks are available from the mock API right now.
            </div>
          ) : (
            <EditorPicksRail>
              {editorPicks.map((story) => (
                <div key={story.id} className="snap-start">
                  <ArticleCard article={story} variant="editor-pick" />
                </div>
              ))}
            </EditorPicksRail>
          )}
        </div>
      </div>
    </section>
  );
}
