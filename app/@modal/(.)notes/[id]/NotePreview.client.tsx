"use client";

import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

type Props = {
  note: Note;
};

const NotePreview = ({ note }: Props) => {
  return (
    <div>
      <div className={css.header}>
        <h2>{note.title}</h2>
      </div>
      <p className={css.content}>{note.content}</p>
    </div>
  );
};

export default NotePreview;
