import { StructureState } from '../interfaces/state.interfaces';
import { StructureAction } from '../interfaces/structure/action.interfaces';
import { StructureActionType } from '../enums/action.enums';

const initialState: StructureState = {
  clients: {
    loading: false,
    data: [],
  },
  projects: {
    loading: false,
    data: [],
  },
  roles: {
    loading: false,
    data: [],
  },
};

export const structureReducer = (state: StructureState = initialState, action: StructureAction) => {
  switch (action.type) {
    case StructureActionType.ClientChangeLoading: {
      return {
        ...state,
        clients: {
          ...state.clients,
          loading: action.payload,
        },
      };
    }
    case StructureActionType.ClientLoadData: {
      return {
        ...state,
        clients: {
          ...state.clients,
          data: action.payload,
        },
      };
    }
    case StructureActionType.ProjectChangeLoading: {
      return {
        ...state,
        projects: {
          ...state.projects,
          loading: action.payload,
        },
      };
    }
    case StructureActionType.ProjectLoadData: {
      return {
        ...state,
        projects: {
          ...state.projects,
          assignmets: action.payload,
        },
      };
    }
    case StructureActionType.RoleChangeLoading: {
      return {
        ...state,
        roles: {
          ...state.roles,
          loading: action.payload,
        },
      };
    }
    case StructureActionType.RoleLoadData: {
      return {
        ...state,
        roles: {
          ...state.roles,
          assignmets: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}
