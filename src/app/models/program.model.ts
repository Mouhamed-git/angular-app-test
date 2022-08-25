export class ProgramModel {
    title?: string;
    language?: string;
    level?: Level;
    type?: ProgramType;
    description?: string;
    objectif?: string;
    duration?: number;
    hours?: number;
    prerequisite?: string;
    certificationType?: string;
    startDate?: Date;
    imageFile?: string;
    videoFile?: string;
}

export enum Language{
    English = "English",
    French = "French",
    Spanish = "Spanish"
}

export enum Level{
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced"
}

export enum ProgramType{
    Foundation = "Foundation",
    Specialization = "Specialization",
}