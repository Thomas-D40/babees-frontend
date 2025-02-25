export interface Babee {
  id: number;
  prenom: string;
  nom: string;
  dateNaissance: Date;
  age: number;
  photoUrl: string;
}

export type BabeeList = Babee[];

export interface BaseItem {
  id: number;
  babeeId: number;
  date: Date;
}

export interface Activity extends BaseItem {
  name: string;
  activityType: number;
}

export type ActivityList = Activity[];

export interface HealthAct extends BaseItem {
  hour: Date;
  healthActType: number;
  temperature?: number;
  medicaments?: number;
  quantity?: number;
}

export type HealthActList = HealthAct[];

export interface Sleeping extends BaseItem {
  begin: Date;
  end: Date;
  duration: number;
}

export type SleepingList = Sleeping[];

export interface CareAct extends BaseItem {
  careActType: number;
  careActDetail?: number;
  commentaire?: string;
}

export type CareActList = CareAct[];

export interface Feeding extends BaseItem {}

export type FeedingList = Feeding[];

export interface Informations extends BaseItem {
  commentaire?: string;
}

export type InformationList = Informations[];

export const CARE_ACT_TYPE_LIST = [
  {
    id: 1,
    label: 'Urine',
  },
  {
    id: 2,
    label: 'Selle',
  },
  {
    id: 3,
    label: 'Yeux',
  },
  { id: 4, label: 'Nez' },
];

export const CARE_ACT_DETAIL_LIST = [
  { id: 1, label: 'Couche' },
  { id: 2, label: 'Pot' },
  { id: 3, label: 'Toilettes' },
];

export enum HealthActType {
  TEMPERATURE = 1,
  MEDICAMENTS = 2,
}
