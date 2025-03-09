import { ApolloError } from "@apollo/client";

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
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export interface ICmsApiResponse {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
}

export interface IHomePageLayoutProps {
  cmsApiResponse: ICmsApiResponse;
  cmsApiError: ApolloError | undefined;
  CmsApiLoading: boolean | undefined;
}

export interface IProjectsSectionProps {
  projects: IProjects[];
}

export interface IJobsSectionProps {
  jobs: IJobs[];
}

export interface ISkillsSectionProps {
  skills: ISkills[];
}

export interface IProjectCardProps {
  project: IProjects;
}

export interface IJobCardProps {
  job: IJobs;
}

export interface ISkillCardProps {
  skills: ISkills[];
  skillName: string;
}

export interface IContactFormProps {
  formData: IFormData;
  formRef: React.Ref<HTMLFormElement | null>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
