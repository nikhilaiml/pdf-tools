'use client';

import { motion } from 'framer-motion';
import {
    Merge, Split, Minimize2, RotateCw, Trash2, ListOrdered, Image, FileText,
    Table, Presentation, FileCode, Stamp, Hash, Crop, Scan, Layers, Lock, Unlock,
    Shield, Eye, Wrench, Activity, Languages, Share2, Music,
    FileImage, MessageSquare, PenTool, EyeOff
} from 'lucide-react';
import { ElementType } from 'react';

interface ToolIconProps {
    iconName: string;
    className?: string;
}

// Update imports to use lucide
const iconMap: Record<string, ElementType> = {
    'merge-pdf': Merge,
    'merge_type': Merge,
    'split-pdf': Split,
    'call_split': Split,
    'compress-pdf': Minimize2,
    'compress': Minimize2,
    'rotate-pdf': RotateCw,
    'rotate_90_degrees_cw': RotateCw,
    'delete-pdf-pages': Trash2,
    'delete': Trash2,
    'rearrange-pdf': ListOrdered,
    'reorder': ListOrdered,
    'pdf-to-jpg': FileImage,
    'jpg-to-pdf': Image,
    'image': Image,
    'pdf-to-word': FileText,
    'word-to-pdf': FileText,
    'description': FileText,
    'pdf-to-excel': Table,
    'excel-to-pdf': Table,
    'pdf-to-ppt': Presentation,
    'ppt-to-pdf': Presentation,
    'pdf-to-text': FileText,
    'text_fields': FileText,
    'html-to-pdf': FileCode,
    'web': FileCode,
    'add-watermark': Stamp,
    'branding_watermark': Stamp,
    'add-page-numbers': Hash,
    'format_list_numbered': Hash,
    'crop-pdf': Crop,
    'crop': Crop,
    'resize-pages': Scan,
    'aspect_ratio': Scan,
    'flatten-pdf': Layers,
    'layers': Layers,
    'protect-pdf': Lock,
    'lock': Lock,
    'unlock-pdf': Unlock,
    'lock_open': Unlock,
    'restrict-printing-copying': Shield,
    'block': Shield,
    'view-metadata': Eye,
    'info': Eye,
    'remove-metadata': Trash2,
    'info_outline': Trash2,
    'repair-corrupted-pdf': Wrench,
    'build': Wrench,
    'optimize-pdf-size': Minimize2,
    'speed': Minimize2,
    'pdf-analytics': Activity,
    'analytics': Activity,
    'pdf-table-extractor': Table,
    'table_rows': Table,
    'scan-to-pdf': Scan,
    'scanner': Scan,
    'screenshot-to-pdf': Image,
    'screenshot': Image,
    'pdf-to-audio': Music,
    'headphones': Music,
    'pdf-translator': Languages,
    'translate': Languages,
    'share-pdf': Share2,
    'share': Share2,
    'chat-with-pdf': MessageSquare,
    'chat': MessageSquare,
    'pdf-summary': FileText,
    'summarize': FileText,
    'annotate-pdf': PenTool,
    'edit_note': PenTool,
    'fill-and-sign': PenTool,
    'sign-pdf': PenTool,
    'draw': PenTool,
    'deskew-pdf': Crop,
    'crop_rotate': Crop,
    'redact-pdf': EyeOff,
    'visibility_off': EyeOff,
    'default': FileText
};

export default function ToolIcon({ iconName, className = "w-6 h-6" }: ToolIconProps) {
    const IconComponent = iconMap[iconName] || iconMap['default'];

    return (
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <IconComponent className={className} />
        </motion.div>
    );
}
