import { EditorConfig } from "../types/config.js";
/**
 * Normalize editor config (string or array) to array of editor IDs.
 */
export declare function normalizeEditorConfig(editor: EditorConfig | undefined): string[];
/**
 * Check if an editor should be generated based on config.
 */
export declare function shouldGenerateEditor(editor: EditorConfig | undefined, editorId: string): boolean;
//# sourceMappingURL=editor-config.d.ts.map