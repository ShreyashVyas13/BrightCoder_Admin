// // src/pages/EditTutorial.jsx
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getTutorialById, updateTutorial } from "../services/api";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.core.css';
// import 'highlight.js/styles/github.css';


// hljs.configure({ languages: ["javascript", "html", "css", "python"] });

// function EditTutorial() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     desc: "",
//     icon: "",
//     link: "",
//     sections: [{ title: "", content: "" }],
//   });

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialById(id);
//         setForm(res.data);
//       } catch (err) {
//         console.error("Error fetching tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [id]);

//   const handleSectionChange = (index, field, value) => {
//     const updatedSections = [...form.sections];
//     updatedSections[index][field] = value;
//     setForm({ ...form, sections: updatedSections });
//   };

//   const addSectionField = () => {
//     setForm({
//       ...form,
//       sections: [...form.sections, { title: "", content: "" }],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateTutorial(id, form);
//       navigate("/manage-tutorial"); // redirect after saving
//     } catch (err) {
//       console.error("Error updating tutorial:", err);
//     }
//   };

//   return (
//     <div className="edit-tutorial">
//       <h1>Edit Tutorial</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={form.desc}
//           onChange={(e) => setForm({ ...form, desc: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Icon"
//           value={form.icon}
//           onChange={(e) => setForm({ ...form, icon: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Link"
//           value={form.link}
//           onChange={(e) => setForm({ ...form, link: e.target.value })}
//         />

//         <h3>Sections</h3>
//         {form.sections.map((s, i) => (
//           <div key={i} className="section-input">
//             <input
//               type="text"
//               placeholder="Section Title"
//               value={s.title}
//               onChange={(e) => handleSectionChange(i, "title", e.target.value)}
//               required
//             />
//             <ReactQuill
//               theme="snow"
//               value={s.content}
//               onChange={(value) => handleSectionChange(i, "content", value)}
//             />
//             <div
//               className="content"
//               dangerouslySetInnerHTML={{ __html: s.content }}
//             />
//             {form.sections.length > 1 && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   const updated = form.sections.filter((_, idx) => idx !== i);
//                   setForm({ ...form, sections: updated });
//                 }}
//               >
//                 ❌ Delete Section
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={addSectionField}>
//           + Add Section
//         </button>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default EditTutorial;

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getTutorialById, updateTutorial } from "../services/api";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import "./EditTutorial.css";


// // ✅ TipTap imports
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
// import { common, createLowlight } from "lowlight";
// const lowlight = createLowlight(common);

// hljs.configure({ languages: ["javascript", "html", "css", "python"] });

// function EditTutorial() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     desc: "",
//     icon: "",
//     link: "",
//     sections: [{ title: "", content: "" }],
//   });

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialById(id);
//         setForm(res.data);
//       } catch (err) {
//         console.error("Error fetching tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [id]);

//   const handleSectionChange = (index, field, value) => {
//     const updatedSections = [...form.sections];
//     updatedSections[index][field] = value;
//     setForm({ ...form, sections: updatedSections });
//   };

//   const addSectionField = () => {
//     setForm({
//       ...form,
//       sections: [...form.sections, { title: "", content: "" }],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateTutorial(id, form);
//       navigate("/manage-tutorial"); // redirect after saving
//     } catch (err) {
//       console.error("Error updating tutorial:", err);
//     }
//   };

//   return (
//     <div className="edit-tutorial">
//       <h1>Edit Tutorial</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={form.desc}
//           onChange={(e) => setForm({ ...form, desc: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Icon"
//           value={form.icon}
//           onChange={(e) => setForm({ ...form, icon: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Link"
//           value={form.link}
//           onChange={(e) => setForm({ ...form, link: e.target.value })}
//         />

//         <h3>Sections</h3>
//         {form.sections.map((s, i) => (
//           <TiptapSection
//             key={i}
//             section={s}
//             index={i}
//             onChange={handleSectionChange}
//             onDelete={() => {
//               const updated = form.sections.filter((_, idx) => idx !== i);
//               setForm({ ...form, sections: updated });
//             }}
//             canDelete={form.sections.length > 1}
//           />
//         ))}

//         <button type="button" onClick={addSectionField}>
//           + Add Section
//         </button>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// // ✅ TipTap Section (same style as Add/Manage)
// function TiptapSection({ section, index, onChange, onDelete, canDelete }) {
//   const editor = useEditor({
//     extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
//     content: section.content || "",
//     onUpdate: ({ editor }) => {
//       onChange(index, "content", editor.getHTML());
//     },
//   });

//   if (!editor) return null;

//   return (
//     <div className="section-input">
//       <input
//         type="text"
//         placeholder="Section Title"
//         value={section.title}
//         onChange={(e) => onChange(index, "title", e.target.value)}
//         required
//       />

//       {/* Toolbar */}
//       <div className="tiptap-toolbar">
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           className={editor.isActive("bold") ? "is-active" : ""}
//         >
//           <b>B</b>
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           className={editor.isActive("italic") ? "is-active" : ""}
//         >
//           <i>I</i>
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           className={editor.isActive("strike") ? "is-active" : ""}
//         >
//           <s>S</s>
//         </button>
//         <button
//           type="button"
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 2 }).run()
//           }
//           className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
//         >
//           H2
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={editor.isActive("bulletList") ? "is-active" : ""}
//         >
//           • List
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={editor.isActive("blockquote") ? "is-active" : ""}
//         >
//           ❝
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={editor.isActive("codeBlock") ? "is-active" : ""}
//         >
//           {"</>"}
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().undo().run()}
//         >
//           ↺
//         </button>
//         <button
//           type="button"
//           onClick={() => editor.chain().focus().redo().run()}
//         >
//           ↻
//         </button>
//       </div>

//       <div className="tiptap-editor">
//         <EditorContent editor={editor} />
//       </div>

//       <div
//         className="content"
//         dangerouslySetInnerHTML={{ __html: section.content }}
//       />

//       {canDelete && (
//         <button type="button" className="delete-section" onClick={onDelete}>
//           ❌ Delete Section
//         </button>
//       )}
//     </div>
//   );
// }

// export default EditTutorial;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTutorialById, updateTutorial } from "../services/api";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./EditTutorial.css";

// ✅ TipTap imports
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
const lowlight = createLowlight(common);

hljs.configure({ languages: ["javascript", "html", "css", "python"] });

function EditTutorial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    image: "", // ✅ replaced icon with image
    link: "",
    sections: [{ title: "", content: "" }],
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const res = await getTutorialById(id);
        setForm(res.data);
        if (res.data.image) setPreview(res.data.image);
      } catch (err) {
        console.error("Error fetching tutorial:", err);
      }
    };
    fetchTutorial();
  }, [id]);

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...form.sections];
    updatedSections[index][field] = value;
    setForm({ ...form, sections: updatedSections });
  };

  const addSectionField = () => {
    setForm({
      ...form,
      sections: [...form.sections, { title: "", content: "" }],
    });
  };

  // ✅ handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTutorial(id, form);
      navigate("/manage-tutorial"); // redirect after saving
    } catch (err) {
      console.error("Error updating tutorial:", err);
    }
  };

  return (
    <div className="edit-tutorial">
      <h1>Edit Tutorial</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          required
        />

        {/* ✅ Image Upload */}
        <div className="image-upload">
          <label>Upload Tutorial Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Tutorial" />
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />

        <h3>Sections</h3>
        {form.sections.map((s, i) => (
          <TiptapSection
            key={i}
            section={s}
            index={i}
            onChange={handleSectionChange}
            onDelete={() => {
              const updated = form.sections.filter((_, idx) => idx !== i);
              setForm({ ...form, sections: updated });
            }}
            canDelete={form.sections.length > 1}
          />
        ))}

        <button type="button" onClick={addSectionField}>
          + Add Section
        </button>

        <div className="edit-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/manage-tutorial")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// ✅ TipTap Section (same style as Add/Manage)
function TiptapSection({ section, index, onChange, onDelete, canDelete }) {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
    content: section.content || "",
    onUpdate: ({ editor }) => {
      onChange(index, "content", editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="section-input">
      <input
        type="text"
        placeholder="Section Title"
        value={section.title}
        onChange={(e) => onChange(index, "title", e.target.value)}
        required
      />

      <div className="tiptap-toolbar">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <b>B</b>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <i>I</i>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <s>S</s>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          ❝
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          {"</>"}
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
        >
          ↺
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
        >
          ↻
        </button>
      </div>

      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />

      {canDelete && (
        <button type="button" className="delete-section" onClick={onDelete}>
          ❌ Delete Section
        </button>
      )}
    </div>
  );
}

export default EditTutorial;
