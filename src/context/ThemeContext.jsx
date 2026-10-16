import { createContext, useContext, useMemo, useState } from 'react';
const ThemeContext = createContext(null);
export function ThemeProvider({children}) {
  const [compact, setCompact] = useState(false);
  const value = useMemo(()=>({compact,toggleCompact:()=>setCompact(v=>!v)}),[compact]);
  return <ThemeContext.Provider value={value}><div className={compact?'app-shell compact-mode':'app-shell'}>{children}</div></ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
