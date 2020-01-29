export interface Client {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  short: string;
  clientId: string;
}

export interface Role {
  id: string;
  name: string;
  short: string;
}
