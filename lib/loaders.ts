import 'server-only';
import type { Locale } from './i18n';

export const getDictionary = async (locale?: Locale) => {
    return import('@/dictionaries/en.json').then((m) => m.default);
};

export const getContents = async (locale?: Locale) => {
    return import('@/contents/en.json').then((m) => m.default);
};
