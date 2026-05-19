export interface FontOption {
  label: string;
  value: string;
  category: 'sans' | 'serif' | 'mono';
}

export const FONT_LIST: FontOption[] = [
  { label: 'Inter',              value: 'Inter',              category: 'sans'  },
  { label: 'Roboto',             value: 'Roboto',             category: 'sans'  },
  { label: 'Open Sans',          value: 'Open Sans',          category: 'sans'  },
  { label: 'Lato',               value: 'Lato',               category: 'sans'  },
  { label: 'Poppins',            value: 'Poppins',            category: 'sans'  },
  { label: 'Nunito',             value: 'Nunito',             category: 'sans'  },
  { label: 'Montserrat',         value: 'Montserrat',         category: 'sans'  },
  { label: 'DM Sans',            value: 'DM Sans',            category: 'sans'  },
  { label: 'Plus Jakarta Sans',  value: 'Plus Jakarta Sans',  category: 'sans'  },
  { label: 'Outfit',             value: 'Outfit',             category: 'sans'  },
  { label: 'Manrope',            value: 'Manrope',            category: 'sans'  },
  { label: 'Space Grotesk',      value: 'Space Grotesk',      category: 'sans'  },
  { label: 'Merriweather',       value: 'Merriweather',       category: 'serif' },
  { label: 'Playfair Display',   value: 'Playfair Display',   category: 'serif' },
  { label: 'Lora',               value: 'Lora',               category: 'serif' },
  { label: 'Crimson Pro',        value: 'Crimson Pro',        category: 'serif' },
  { label: 'EB Garamond',        value: 'EB Garamond',        category: 'serif' },
  { label: 'JetBrains Mono',     value: 'JetBrains Mono',     category: 'mono'  },
  { label: 'Fira Code',          value: 'Fira Code',          category: 'mono'  },
  { label: 'Source Code Pro',    value: 'Source Code Pro',    category: 'mono'  },
];
