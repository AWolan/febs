import { Moment } from 'moment';

interface AssetBase {
  id: string;
  name: string;
  surname: string;
  startDate: any;
  endDate: any;
  skills: SkillLevel[];
}
export interface Asset extends AssetBase {
  startDate: Moment;
  endDate: Moment;
}

export interface AssetTO extends AssetBase {
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
  description?: string;
}

export interface SkillLevel {
  skill: Skill;
  level: number;
}
