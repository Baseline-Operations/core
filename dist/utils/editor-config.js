/**
 * Normalize editor config (string or array) to array of editor IDs.
 */
export function normalizeEditorConfig(editor) {
    if (!editor)
        return [];
    if (typeof editor === "string")
        return [editor];
    return editor;
}
/**
 * Check if an editor should be generated based on config.
 */
export function shouldGenerateEditor(editor, editorId) {
    return normalizeEditorConfig(editor).includes(editorId);
}
//# sourceMappingURL=editor-config.js.map