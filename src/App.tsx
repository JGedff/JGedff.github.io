import './App.css'
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global")

  return (
    <>
      {t('hello')}
      <button onClick={() => i18n.changeLanguage('ca')}>CA</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
    </>
  )
}

export default App
