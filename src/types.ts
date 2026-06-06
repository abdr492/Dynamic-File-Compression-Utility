/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CompressionAlgorithm = 'gzip' | 'deflate' | 'huffman' | 'lzw' | 'rle';

export type CompressionTheme = 'slate' | 'forest' | 'indigo' | 'crimson' | 'amber' | 'rust';

export interface FileItem {
  id: string;
  name: string;
  size: number; // bytes
  type: string;
  status: 'pending' | 'compressing' | 'completed' | 'failed';
  progress: number; // 0 - 100
  compressedSize: number | null;
  compressedData: Uint8Array | null;
  duration: number | null; // milliseconds
  entropy: number | null; // Shannon Entropy
  threadsUsed: number;
  error: string | null;
  originalPreview?: string | null;
  originalData?: Uint8Array;
}

export interface CompressionStats {
  totalFiles: number;
  totalOriginalSize: number;
  totalCompressedSize: number;
  spaceSavedPercent: number;
  averageRatio: number;
  timeSpent: number; // ms
}

export interface LogEntry {
  id: string;
  timestamp: string; // ISO string or simple time format
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;
  threadId?: number; // Simulated Multi-threaded Worker ID (e.g. 1-8)
}

export interface HuffmanNode {
  char?: string;
  freq: number;
  left?: HuffmanNode;
  right?: HuffmanNode;
  code?: string;
}
