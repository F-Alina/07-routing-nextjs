import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: {
    slug?: string[];
  };
};
export default async function NotesPage({ params }: Props) {
  const page = 1;
  const perPage = 12;
  const search = "";

  const tag: string | undefined =
    params.slug && params.slug.length > 0 ? params.slug[0] : undefined;

  const tagForApi = tag === "All" ? undefined : tag;

  const data = await fetchNotes(page, perPage, search, tagForApi);

  return (
    <NotesClient
      initialData={data}
      initialPage={page}
      initialSearch={search}
      initialTag={tag || "All"}
    />
  );
}
