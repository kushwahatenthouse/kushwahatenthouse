import { nodes as basicNodes, marks } from 'ngx-editor';
import { toStyleString } from 'ngx-editor/utils';

import { DOMOutputSpec, Node as ProsemirrorNode, NodeSpec } from 'prosemirror-model';
import * as sl from 'prosemirror-schema-list';

const div: NodeSpec = {
    content: 'inline*',
    group: 'block',
    attrs: {
      align: {
        default: null,
      },
      background: {
        default: null
      }
    },
    parseDOM: [
      {
        tag: 'div', // this will parse div to the editor required format
        getAttrs(dom: any | HTMLElement): Record<string, any> {
          const { textAlign, background } = dom.style; // you can add required properties here.
          const alignq = dom.getAttribute('align') || textAlign || null;
  
          return {
            alignq,
            background
          };
        }
      }
    ],
    toDOM(node): DOMOutputSpec {
      const { align,background } = node.attrs;
  
      const styles: Partial<CSSStyleDeclaration> = {
        textAlign: align !== 'left' ? align : null,
        background
      };
      const style = toStyleString(styles) || null;
  
      return ['div', { style }, 0];
    }
};

const table: NodeSpec = {
  content: 'inline*',
  group: 'block',
  attrs: {
    align: {
      default: null,
    },
    background: {
      default: null
    }
  },
  parseDOM: [
    {
      tag: 'table', // this will parse div to the editor required format
      getAttrs(dom: any | HTMLElement): Record<string, any> {
        const { textAlign, background } = dom.style; // you can add required properties here.
        const alignq = dom.getAttribute('align') || textAlign || null;

        return {
          alignq,
          background
        };
      }
    }
  ],
  toDOM(node): DOMOutputSpec {
    const { align,background } = node.attrs;

    const styles: Partial<CSSStyleDeclaration> = {
      textAlign: align !== 'left' ? align : null,
      background
    };
    const style = toStyleString(styles) || null;

    return ['table', { style }, 0];
  }
};

const th: NodeSpec = {
  content: 'inline*',
  group: 'block',
  attrs: {
    align: {
      default: null,
    },
    background: {
      default: null
    }
  },
  parseDOM: [
    {
      tag: 'th', // this will parse div to the editor required format
      getAttrs(dom: any | HTMLElement): Record<string, any> {
        const { textAlign, background } = dom.style; // you can add required properties here.
        const alignq = dom.getAttribute('align') || textAlign || null;

        return {
          alignq,
          background
        };
      }
    }
  ],
  toDOM(node): DOMOutputSpec {
    const { align,background } = node.attrs;

    const styles: Partial<CSSStyleDeclaration> = {
      textAlign: align !== 'left' ? align : null,
      background
    };
    const style = toStyleString(styles) || null;

    return ['th', { style }, 0];
  }
};

const tr: NodeSpec = {
  content: 'inline*',
  group: 'block',
  attrs: {
    align: {
      default: null,
    },
    background: {
      default: null
    }
  },
  parseDOM: [
    {
      tag: 'tr', // this will parse div to the editor required format
      getAttrs(dom: any | HTMLElement): Record<string, any> {
        const { textAlign, background } = dom.style; // you can add required properties here.
        const alignq = dom.getAttribute('align') || textAlign || null;

        return {
          alignq,
          background
        };
      }
    }
  ],
  toDOM(node): DOMOutputSpec {
    const { align,background } = node.attrs;

    const styles: Partial<CSSStyleDeclaration> = {
      textAlign: align !== 'left' ? align : null,
      background
    };
    const style = toStyleString(styles) || null;

    return ['tr', { style }, 0];
  }
};

const td: NodeSpec = {
  content: 'inline*',
  group: 'block',
  attrs: {
    align: {
      default: null,
    },
    background: {
      default: null
    }
  },
  parseDOM: [
    {
      tag: 'td', // this will parse div to the editor required format
      getAttrs(dom: any | HTMLElement): Record<string, any> {
        const { textAlign, background } = dom.style; // you can add required properties here.
        const alignq = dom.getAttribute('align') || textAlign || null;

        return {
          alignq,
          background
        };
      }
    }
  ],
  toDOM(node): DOMOutputSpec {
    const { align,background } = node.attrs;

    const styles: Partial<CSSStyleDeclaration> = {
      textAlign: align !== 'left' ? align : null,
      background
    };
    const style = toStyleString(styles) || null;

    return ['td', { style }, 0];
  }
};





const nodes = Object.assign({}, basicNodes, {
  div,table,th,tr,td
});

import { Schema } from 'prosemirror-model';

const schema = new Schema({
  marks,
  nodes,
});

export default schema;