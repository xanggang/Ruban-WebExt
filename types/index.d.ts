declare module '*.png'

declare module 'nprogress'

declare module 'lodash-es'

declare module 'jsonp'

declare type Nullable<T> = T | null;

declare type Recordable<T = any> = Record<string, T>;

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare type RefType<T> = T | null

declare type EmitType = (event: any, ...args: any[]) => void

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

declare type TimeoutHandle = ReturnType<typeof setTimeout>

declare type IntervalHandle = ReturnType<typeof setInterval>

declare type LabelValueOptions = {
  label: string;
  value: any;
  [key: string]: string | number | boolean;
}[];

declare interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

