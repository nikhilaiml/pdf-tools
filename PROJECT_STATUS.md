# Project Record: Zero to 100

This document serves as a complete record of the **PDF Tools** project, detailing its architecture, implementation logic, tool status, and current capabilities.

## 1. Project Overview

**PDF Tools** is a comprehensive, privacy-focused, client-side web application for manipulating PDF documents.
*   **Zero Server Usage:** All processing happens in the user's browser (Client-Side) using WebAssembly and JavaScript libraries. Files are *never* uploaded to a server, ensuring 100% privacy.
*   **No Login Required:** The app is free and anonymous.
*   **Technology Stack:**
    *   **Framework:** Next.js 14+ (App Router)
    *   **Styling:** Tailwind CSS + Framer Motion (for animations)
    *   **Core Libraries:** `pdf-lib` (manipulation), `pdfjs-dist` (reading/rendering), `docx` (Word generation), `jspdf` (PDF generation).

## 2. Architecture & Logic

### Core Components
*   **`ToolPageLayout`**: A unified wrapper for all tool pages. It handles the global `Navbar`, Hero section, search bar, steps display, testimonials, "At a Glance" links, and global `Footer`.
    *   *Logic:* It uses a `children` prop to render the specific tool's interface (upload area) over the hero section.
*   **`FileUploader` / Drag & Drop**: A standardized component (often implemented per page) to handle file selection.

### Tool Implementation Logic

Most tools follow a similar Client-Side pattern:
1.  **Input**: User selects files via Drag & Drop.
2.  **Processing**: The browser reads the file as an `ArrayBuffer`.
3.  **Operation**: A library (`pdf-lib`, `pdfjs-dist`) modifies the buffer in memory.
4.  **Output**: A new `Blob` is created, and a download link is triggered.

#### Logic by Category:

1.  **Basic Manipulation (Merge, Split, Rotate, Delete pages)**
    *   **Library**: `pdf-lib`
    *   **Logic**: Files are loaded into `PDFDocument`. Pages are copied from source documents and added to a new destination document. Metadata is set, and the file is saved.
    *   *Status*: **Fully Functional**.

2.  **Conversion TO PDF (JPG to PDF, Scan to PDF)**
    *   **Library**: `pdf-lib`
    *   **Logic**: Images are embedded into a new PDF document. The page size is set to match the image dimensions.
    *   *Status*: **Fully Functional**.

3.  **Conversion FROM PDF (PDF to Word, PDF to Text)**
    *   **Library**: `pdfjs-dist`, `docx`
    *   **Logic**:
        *   `pdfjs-dist` extracts text items and their coordinates (x, y) from each page.
        *   **Heuristic Grouping**: Text items are sorted by Y-coordinate to reconstruct lines and paragraphs.
        *   **Output**: `docx` library builds a Word document paragraph by paragraph.
    *   *Limitations*: Complex layouts (tables, columns) are approximated. Perfect fidelity is hard to achieve client-side.
    *   *Status*: **Functional (Text-based)**.

4.  **AI / Advanced Features (Chat with PDF)**
    *   **Library**: Pure JavaScript Logic (No external LLM API)
    *   **Logic**:
        *   Extracts all text from the PDF.
        *   Chunks text into sentences/paragraphs.
        *   **Search**: Uses keyword matching/scoring to find relevant chunks based on user query.
        *   **Response**: Returns the most relevant text chunks as the "answer".
    *   *Status*: **Functional (Offline)**. It's a "search and retrieve" bot, not a generative AI (like GPT), ensuring privacy and offline capability.

## 3. Tool Inventory & Status

| Tool Name | Status | Logic / Notes |
| :--- | :--- | :--- |
| **Merge PDF** | ✅ Working | Uses `pdf-lib` to combine documents. |
| **Split PDF** | ✅ Working | Extracts page ranges to new docs. |
| **Compress PDF** | ✅ Working | Re-serializes PDF (basic compression). |
| **Rotate PDF** | ✅ Working | Modifies page rotation metadata. |
| **PDF to JPG** | ✅ Working | Renders pages to Canvas -> Blob. |
| **JPG to PDF** | ✅ Working | Embeds images into PDF pages. |
| **Scan to PDF** | ✅ Working | Same as JPG to PDF, optimized for scans. |
| **PDF to Word** | ✅ Working | Extracts text, builds .docx. Layouts may vary. |
| **Chat with PDF** | ✅ Working | Offline keyword search bot. High privacy. |
| **Organize/Reorder** | ✅ Working | Visual drag-and-drop page reordering. |
| **Protect/Unlock** | ✅ Working | Encrypts/Decrypts PDF standard security. |
| **Add Watermark** | ✅ Working | Draws opacity text/image over pages. |
| **Page Numbers** | ✅ Working | Draws numbering text on page footer/header. |

*Note: All tools listed in the navigation are implemented using similar client-side patterns.*

## 4. Current User Experience (UX)

*   **Design**: Modern, "Premium" aesthetic with gradients, glassmorphism, and animations (`framer-motion`).
*   **Navigation**:
    *   **Home**: Search bar filters tools instantly.
    *   **Tools**: Search bar redirects to Home (with query).
    *   **Links**: "Learn More" links point to actual implementation pages.
*   **Visuals**: Floating 3D icons, interactive hover states, consistent color coding for tool categories (Red for PDF, Blue for Convert, etc.).

## 5. Known Areas for Improvement

1.  **PDF to Word Layouts**: Complex tables or multi-column PDFs might lose formatting during conversion since the logic relies on coordinate sorting.
2.  **Large File Performance**: Since processing is in-browser, very large files (e.g., >100MB) might lag or crash the browser tab on low-end devices.
3.  **Chat Intelligence**: The "Chat" is a retrieval system. It cannot "reason" or generate new text outside the document's content.

---
**Summary**: The project has successfully achieved the "Zero to 100" goal of a fully client-side, functional PDF toolkit with a high-quality UI.
