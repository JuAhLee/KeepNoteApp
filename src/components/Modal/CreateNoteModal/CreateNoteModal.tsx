import  { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import {
  AddedTagsBox,
  Box,
  OptionsBox,
  StyledInput,
  TopBox,
} from "./CreateNoteModal.styles";
import {
  toggleCreateNoteModal,
  toggleTagsModal,
} from "../../../store/modal/modalSlice";
import {
  setEditNote,
  setMainNotes,
} from "../../../store/notesList/notesListSlice";
import { ButtonFill, ButtonOutline } from "../../../styles/styles";
import { FaPlus, FaTimes } from "react-icons/fa";
import TagsModal from "../TagsModal/TagsModal";
// import { addTags } from "../../../store/tags/tagsSlice";
import { v4 } from "uuid";
import TextEditor from "../../TextEditor/TextEditor";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { Note } from "../../../types/note";

const CreateNoteModal = () => {
  const dispatch = useAppDispatch();

  const { editNote } = useAppSelector((state) => state.notesList);
  const { viewAddTagsModal } = useAppSelector((state) => state.modal);

  const [noteTitle, setNoteTitle] = useState(editNote?.title || "");
  const [value, setValue] = useState(editNote?.content || "");
  const [addedTags, setAddedTags] = useState(editNote?.tags || []);
  const [noteColor, setNoteColor] = useState(editNote?.color || "");
  const [priority, setPriority] = useState(editNote?.priority || "low");

  const closeCreateNoteModal = () => {
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  const tagsHandler = (tag: string, type: string) => {
    const newTag = tag.toLocaleLowerCase();

    if (type === "add") {
      setAddedTags((prev) => [...prev, { tag: newTag, id: v4() }]);
    } else {
      setAddedTags(addedTags.filter(({ tag }) => tag !== newTag));
    }
  };

  const createNoteHandler = () => {
    if (!noteTitle) {
      toast.error("타이틀을 적어주세요.");
      return;
    } else if (value === "<p><br></p>") {
      toast.error("글을 작성해주세요.");
      return;
    }

    const date = dayjs().format("DD/MM/YY h:mm A");
    // console.log("date", date);

    let note: Partial<Note> = {
      title: noteTitle,
      content: value,
      tags: addedTags,
      color: noteColor,
      priority,
      editedTime: new Date().getTime(),
    };

    if (editNote) {
      note = { ...editNote, ...note };
    } else {
      note = {
        ...note,
        date,
        createdTime: new Date().getTime(),
        editedTime: null,
        isPinned: false,
        isRead: false,
        id: v4(),
      };
    }

    dispatch(setMainNotes(note));
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  return (
    <FixedContainer>
      {/* Add Tag Modal */}
      {viewAddTagsModal && (
        <TagsModal type="add" addedTags={addedTags} handleTags={tagsHandler} />
      )}

      <Box>
        <TopBox>
          <div className="createNote_title">노트 생성하기</div>
          <DeleteBox
            className="createNote__close-btn"
            onClick={closeCreateNoteModal}
          ></DeleteBox>
        </TopBox>

        {/* 노트 제목, 저장하기 */}
        <StyledInput
          type="text"
          value={noteTitle}
          name="title"
          placeholder="제목..."
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <div>
          <TextEditor color={noteColor} value={value} setValue={setValue} />
        </div>

        {/* tag */}
        <AddedTagsBox>
          {addedTags.map(({ tag, id }) => (
            <div key={id}>
              <span className="createNote__tag">{tag}</span>
              <span
                className="createNote__tag-remove"
                onClick={() => tagsHandler(tag, "remove")}
              >
                <FaTimes />
              </span>
            </div>
          ))}
        </AddedTagsBox>

        <OptionsBox>
          <ButtonOutline
            onClick={() =>
              dispatch(toggleTagsModal({ type: "add", view: true }))
            }
          >
            {" "}
            Add Tag
          </ButtonOutline>

          {/* 배경색  옵션 */}
          <div>
            <label htmlFor="color">배경색 : </label>
            <select
              value={noteColor}
              id="color"
              onChange={(e) => setNoteColor(e.target.value)}
            >
              <option value="#fff">White</option>
              <option value="#ffcccd">Pink</option>
              <option value="#ccffcc">Green</option>
              <option value="#cce0ff">Blue</option>
              <option value="#ffffcc">Yellow</option>
            </select>
          </div>

          {/* 우선순위 옵션 */}
          <div>
            <label htmlFor="priority">우선순위 : </label>
            <select
              value={priority}
              id="color"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </OptionsBox>

        {/* 저장 | 생성 버튼 */}
        <div className="createNote__create-btn">
          <ButtonFill onClick={createNoteHandler}>
            {editNote ? (
              <span>저장하기</span>
            ) : (
              <>
                <FaPlus /> <span>생성하기</span>
              </>
            )}
          </ButtonFill>
        </div>
      </Box>
    </FixedContainer>
  );
};

export default CreateNoteModal;
