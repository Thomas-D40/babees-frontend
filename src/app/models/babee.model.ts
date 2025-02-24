export interface Babee {
    id: number;
    prenom: string;
    nom: string;
    dateNaissance: Date;
    age: number;
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

export interface Feeding extends BaseItem {
}

export type FeedingList = Feeding[];

export interface Informations extends BaseItem {
    commentaire?: string;
}

export type InformationList = Informations[];

export enum CareActType {
    PIPI = 1,
    CACA = 2,
    LAVAGE_YEUX = 3,
    LAVAGE_NEZ = 4
}

export enum CareActDetail {
    COUCHE = 1,
    POT = 2,
    TOILETTES = 3
}

export enum HealthActType {
    TEMPERATURE = 1,
    MEDICAMENTS = 2
}
