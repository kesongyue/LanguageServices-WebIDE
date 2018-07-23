import JavaLanguageServer from './JavaLanguageServer';
import PythonLanguageServer from './PythonLanguageServer';

import { LanguageServerProfile } from '../types';

type LanguageServers = typeof JavaLanguageServer | typeof PythonLanguageServer;

const serverProfiles: LanguageServerProfile<LanguageServers>[] = [
  { language: 'java', server: JavaLanguageServer },
  { language: 'python', server: PythonLanguageServer },
];

export default serverProfiles;
