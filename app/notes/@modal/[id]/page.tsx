import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";

type Props = {
  params: { id: string };
};

const NotePreview = async ({ params }: Props) => {
  const { id } = params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <div>{note.title}</div>
      <div>{note.content}</div>
    </Modal>
  );
};

export default NotePreview;
