import {Theme} from '@emotion/react/dist/declarations/src';

export type WithChildren<P = unknown> = P & {
  children: React.ReactNode;
};
