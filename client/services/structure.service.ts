import axios, { AxiosResponse } from 'axios';

import { Client, Project, Role } from '../interfaces/structure/interfaces';

export const fetchAllClients = () =>
  axios.get('/api/structure/client')
    .then((response: AxiosResponse<Client[]>): Client[] => response.data);

export const fetchAllProjects = () =>
  axios.get('/api/structure/project')
    .then((response: AxiosResponse<Project[]>): Project[] => response.data);

export const fetchAllRoles = () =>
  axios.get('/api/structure/role')
    .then((response: AxiosResponse<Role[]>): Role[] => response.data);
