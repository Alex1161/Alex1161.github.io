import { createContext } from 'react';
import { english } from '../languages/english';

export const LanguageContext = createContext({ language: english, setlanguage: () => {} });
