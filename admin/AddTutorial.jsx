// import { useState } from "react";
// import { addTutorial } from "../services/api.js";
// import { useNavigate } from "react-router-dom";
// import "./ManageTutorial.css";

// // TipTap imports
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
// import { common, createLowlight } from "lowlight";
// const lowlight = createLowlight(common);

// function AddTutorial() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     desc: "",
//     icon: "",
//     link: "",
//     sections: [{ title: "", content: "" }],
//   });

//   const handleSectionChange = (index, field, value) => {
//     const updated = [...form.sections];
//     updated[index][field] = value;
//     setForm({ ...form, sections: updated });
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
//       await addTutorial(form);
//       navigate("/manage-tutorial");
//     } catch (err) {
//       console.error("Error adding tutorial:", err);
//     }
//   };

//   return (
//     <div className="admin-page">
//       <h1>Add New Tutorial</h1>

//       <form onSubmit={handleSubmit} className="modal-form">
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
//           placeholder="Icon (e.g., FaHtml5)"
//           value={form.icon}
//           onChange={(e) => setForm({ ...form, icon: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Link (e.g., /tutorial/html)"
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

//         <div className="modal-actions">
//           <button type="submit">Add Tutorial</button>
//           <button type="button" onClick={() => navigate("/manage-tutorial")}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

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
//       </div>

//       <div className="tiptap-editor">
//         <EditorContent editor={editor} />
//       </div>

//       {canDelete && (
//         <button type="button" className="delete-section" onClick={onDelete}>
//           ❌ Delete Section
//         </button>
//       )}
//     </div>
//   );
// }

// export default AddTutorial;

import { useState } from "react";
import { addTutorial } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import "./ManageTutorial.css";

// TipTap imports
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
const lowlight = createLowlight(common);

function AddTutorial() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    image: "", // ✅ replaced icon with image
    link: "",
    sections: [{ title: "", content: "" }],
  });

  const [preview, setPreview] = useState(null);

  const handleSectionChange = (index, field, value) => {
    const updated = [...form.sections];
    updated[index][field] = value;
    setForm({ ...form, sections: updated });
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

    // Show image preview
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
      await addTutorial(form);
      navigate("/manage-tutorial");
    } catch (err) {
      console.error("Error adding tutorial:", err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Add New Tutorial</h1>

      <form onSubmit={handleSubmit} className="modal-form">
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

        {/* ✅ Image Upload Field */}
        <div className="image-upload">
          <label>Upload Tutorial Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Link (e.g., /tutorial/html)"
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

        <div className="modal-actions">
          <button type="submit">Add Tutorial</button>
          <button type="button" onClick={() => navigate("/manage-tutorial")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// ✅ TipTap Editor Section
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
      </div>

      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>

      {canDelete && (
        <button type="button" className="delete-section" onClick={onDelete}>
          ❌ Delete Section
        </button>
      )}
    </div>
  );
}

export default AddTutorial;
