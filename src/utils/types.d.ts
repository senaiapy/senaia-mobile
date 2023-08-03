interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;

type DesignSystemColors = Record<string, string>;
type AppearanceMode = 'light' | 'dark';
type StatusBarStyle = 'light-content' | 'dark-content' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};
type CurrentAppearance = {
  value: AppearanceMode;
  system: boolean;
};

type Language = 'pt' | 'es' | 'en' | 'ru';

// SERVICES
type AppType = 'one_screen' | 'three_tabs';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'Portuguese' | 'Spanish' | 'English' | 'Russian';

// SCREENS
// Props

type TvScreenProps = {
  value?: string;
};

type FilmScreenProps = {
  value?: string;
};

type SeriesScreenProps = {
  value?: string;
};

type MenuScreenProps = {
  value?: string;
};

type EpgScreenProps = {
  value?: string;
};

type RecordsScreenProps = {
  value?: string;
};

type DownloadsScreenProps = {
  value?: string;
};

type ListsScreenProps = {
  value?: string;
};

type ListDetailScreenProps = {
  value?: string;
};

type LoginsScreenProps = {
  value?: string;
};

type RegistersScreenProps = {
  value?: string;
};

type PasswordsScreenProps = {
  value?: string;
};

type ConfigsScreenProps = {
  value?: string;
};

type ModelScreenProps = {
  value?: string;
};

type ExampleScreenProps = {
  value?: number;
};

type PlayFilmScreenProps = {
  value?: string;
};

// Settings
type AppearanceAction = {
  name: UIAppearance;
};

type LanguageAction = {
  name: UILanguage;
};

// API
// Responses
type CounterGetResponse = {
  value: number;
};
