export interface TransformNode {
  tagName: string;
  attrs: Record<string, string>;
  innerHTML: string;
}

export interface TransformResult {
  html: string;
}

export type TransformFn = (node: TransformNode) => TransformResult;

export type IconMap = Record<string, string>;
