import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <div className={css.header}>
        <h2>{note.title}</h2>
      </div>
      <p className={css.content}>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;
