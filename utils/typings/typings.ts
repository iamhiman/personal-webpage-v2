export interface IUrl {
  url: string;
}

export interface IText {
  text: string;
}

export interface ISkills {
  id: string;
  uniqueId: number;
  proficient: boolean;
  skill: string;
  url: string;
  fieldType: string | null;
  image: IUrl;
}

export interface IJobs {
  id: string;
  company: string;
  designation: string;
  companyLinkedin: string;
  companyUrl: string;
  from: string;
  to: string;
  logo: IUrl;
}

export interface IProjects {
  id: string;
  title: string;
  uniqueId: number;
  description: string;
  demoLink: string;
  githubLink: string;
  techStack: Array<IText>;
  image: IUrl;
}

export interface IFormFields {
  value: string;
  errorMessage: string;
}
export interface IFormData {
  name: IFormFields;
  email: IFormFields;
  message: IFormFields;
}

export interface INavbarProps {
  onNavItemClick?: (item: string) => void;
  switchTheme?: () => void;
  theme?: string;
}